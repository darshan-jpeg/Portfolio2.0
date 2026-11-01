import React, { Children, cloneElement, forwardRef, isValidElement, useEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';
import './CardSwap.css';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  customClass?: string;
  children?: React.ReactNode;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(({ customClass, className = '', ...rest }, ref) => (
  <div
    ref={ref}
    {...rest}
    className={`card-swap-item bg-white/95 dark:bg-[#121215]/95 backdrop-blur-2xl border border-black/10 dark:border-white/15 shadow-[0_18px_45px_rgba(0,0,0,0.08)] dark:shadow-[0_22px_55px_rgba(0,0,0,0.8)] text-black dark:text-white ${customClass ?? ''} ${className}`.trim()}
  />
));
Card.displayName = 'Card';

const makeSlot = (i: number, distX: number, distY: number, total: number) => {
  const centerOffsetX = ((total - 1) * distX) / 2;
  const centerOffsetY = ((total - 1) * distY) / 2;
  return {
    x: i * distX - centerOffsetX,
    y: -i * distY + centerOffsetY,
    z: -i * 50,
    zIndex: (total - i) * 10
  };
};

const placeNow = (el: HTMLElement | null, slot: { x: number; y: number; z: number; zIndex: number }, skew: number) => {
  if (!el) return;
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    scale: 1,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    rotationX: 0,
    rotationY: 0,
    transformOrigin: 'center center',
    zIndex: slot.zIndex,
    force3D: true
  });
};

export interface CardSwapProps {
  width?: number | string;
  height?: number | string;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  onCardClick?: (idx: number) => void;
  onSwap?: (topIndex: number) => void;
  skewAmount?: number;
  children: React.ReactNode;
}

export const CardSwap: React.FC<CardSwapProps> = ({
  width = 500,
  height = 400,
  cardDistance = 26,
  verticalDistance = 30,
  delay = 4500,
  pauseOnHover = false,
  onCardClick,
  onSwap,
  skewAmount = 4,
  children
}) => {
  const childArr = useMemo(() => Children.toArray(children), [children]);
  const refs = useMemo(
    () => childArr.map(() => React.createRef<HTMLDivElement>()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [childArr.length]
  );

  const order = useRef<number[]>(Array.from({ length: childArr.length }, (_, i) => i));
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const intervalRef = useRef<number | undefined>(undefined);
  const container = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);

  useEffect(() => {
    const total = refs.length;
    refs.forEach((r, i) => placeNow(r.current, makeSlot(i, cardDistance, verticalDistance, total), skewAmount));

    const swap = () => {
      if (order.current.length < 2 || isAnimating.current) return;

      const [front, ...rest] = order.current;
      const elFront = refs[front].current;
      if (!elFront) return;

      isAnimating.current = true;
      const tl = gsap.timeline({
        onComplete: () => {
          isAnimating.current = false;
          order.current = [...rest, front];
          if (onSwap && rest.length > 0) {
            onSwap(rest[0]);
          }
        }
      });
      tlRef.current = tl;

      const frontSlot = makeSlot(0, cardDistance, verticalDistance, total);
      const backSlot = makeSlot(total - 1, cardDistance, verticalDistance, total);

      // 1. Ensure front card is undeniably top layer while swinging out to the right
      gsap.set(elFront, { zIndex: 999 });

      // 2. Stage 1: Front card glides smoothly out to the RIGHT with full stack clearance (360px)
      tl.to(elFront, {
        x: frontSlot.x + 360,
        y: frontSlot.y - 10,
        z: 40,
        scale: 1.02,
        rotationY: 15,
        duration: 0.6,
        ease: 'power2.out'
      }, 0);

      // 3. Promote remaining cards forward smoothly
      rest.forEach((idx, i) => {
        const el = refs[idx].current;
        if (!el) return;
        const targetSlot = makeSlot(i, cardDistance, verticalDistance, total);
        tl.to(
          el,
          {
            x: targetSlot.x,
            y: targetSlot.y,
            z: targetSlot.z,
            scale: 1,
            rotationY: 0,
            zIndex: targetSlot.zIndex,
            duration: 0.65,
            ease: 'power2.out'
          },
          0.12 + i * 0.05
        );
      });

      // 4. Stage 2: When completely clear to the right, plunge Z-depth behind the stack
      tl.call(() => {
        gsap.set(elFront, { zIndex: 1 });
      }, undefined, 0.6);

      tl.to(elFront, {
        z: backSlot.z - 45,
        scale: 0.96,
        rotationY: -4,
        duration: 0.25,
        ease: 'sine.inOut'
      }, 0.6);

      // 5. Stage 3: Smoothly slide back into the back slot from behind
      tl.to(elFront, {
        x: backSlot.x,
        y: backSlot.y,
        z: backSlot.z,
        scale: 1,
        rotationY: 0,
        duration: 0.65,
        ease: 'power2.out'
      }, 0.85);

      tl.call(() => {
        gsap.set(elFront, { zIndex: backSlot.zIndex });
      }, undefined, 1.5);
    };

    intervalRef.current = window.setInterval(swap, delay);

    if (pauseOnHover) {
      const node = container.current;
      if (node) {
        const pause = () => {
          tlRef.current?.pause();
          clearInterval(intervalRef.current);
        };
        const resume = () => {
          tlRef.current?.play();
          intervalRef.current = window.setInterval(swap, delay);
        };
        node.addEventListener('mouseenter', pause);
        node.addEventListener('mouseleave', resume);
        return () => {
          node.removeEventListener('mouseenter', pause);
          node.removeEventListener('mouseleave', resume);
          clearInterval(intervalRef.current);
        };
      }
    }
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount]);

  const rendered = childArr.map((child, i) => {
    if (!isValidElement(child)) return child;
    const childElement = child as React.ReactElement<any>;
    return cloneElement(childElement, {
      key: i,
      ref: refs[i],
      style: { width, height, ...(childElement.props?.style ?? {}) },
      onClick: (e: React.MouseEvent) => {
        childElement.props?.onClick?.(e);
        onCardClick?.(i);
      }
    });
  });

  return (
    <div
      ref={container}
      className="card-swap-container"
      style={{
        width,
        height
      }}
    >
      {rendered}
    </div>
  );
};
