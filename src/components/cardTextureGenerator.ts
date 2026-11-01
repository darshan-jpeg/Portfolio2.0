/**
 * Generates ultra-high-resolution (1024x1536) card textures
 * In dark mode: the ID card is crisp white with bold black typography
 * In light mode: the ID card is sleek deep dark with bold white typography
 * - Upper half (~50% height): Darshan's portrait photo in authentic original colors,
 *   zoomed out so full hair, face, collar, and shoulders are clearly visible.
 * - Lower half: Just Name, Designation, and Company in bold, high-contrast typography.
 */

export function generateCardTextureUrls(isDark: boolean = true): Promise<{ front: string; back: string }> {
  return new Promise((resolve) => {
    const W = 1024;
    const H = 1536;

    const photoImg = new Image();
    photoImg.crossOrigin = 'anonymous';
    photoImg.src = '/darshan-photo.jpg';

    const render = () => {
      // In dark mode: ID card is WHITE with bold dark typography
      // In light mode: ID card is DARK with bold light typography
      const bgCard        = isDark ? '#ffffff' : '#111215';
      const textPrimary   = isDark ? '#09090b' : '#ffffff';
      const textSecondary = isDark ? '#27272a' : '#e4e4e7';
      const textMuted     = isDark ? '#52525b' : '#a1a1aa';
      const borderBold    = isDark ? 'rgba(0, 0, 0, 0.18)' : 'rgba(255, 255, 255, 0.22)';
      const pillBg        = isDark ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.12)';
      const pillBorder    = isDark ? 'rgba(0, 0, 0, 0.18)' : 'rgba(255, 255, 255, 0.28)';
      const dividerCol    = isDark ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.14)';
      const accentGreen   = '#10b981';

      // ═════════════════ FRONT FACE ═════════════════
      const frontCanvas = document.createElement('canvas');
      frontCanvas.width = W;
      frontCanvas.height = H;
      const ctx = frontCanvas.getContext('2d')!;
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      // Base card background
      ctx.fillStyle = bgCard;
      ctx.fillRect(0, 0, W, H);

      // ── Upper Half Photo Container (~50% of the ID Card) ──
      const photoX = 64;
      const photoY = 64;
      const photoW = W - 128; // 896px
      const photoH = 720;     // 720px (~47% of card height)
      const photoRadius = 24;

      // Photo frame background
      ctx.fillStyle = '#f0f1f4';
      roundRect(ctx, photoX, photoY, photoW, photoH, photoRadius);
      ctx.fill();

      if (photoImg.complete && photoImg.naturalWidth > 0) {
        ctx.save();
        roundRect(ctx, photoX, photoY, photoW, photoH, photoRadius);
        ctx.clip();

        // Fit photo width completely to the frame so shoulders extend edge-to-edge (no white gaps)
        // With photo natural dimensions 896x1024 and photoW=896, dh=1024.
        const dw = photoW;
        const dh = photoW * (photoImg.naturalHeight / photoImg.naturalWidth);
        const dx = photoX;
        // Position top so full hair and head have natural headroom with zero cut-off
        const dy = photoY;

        // Draw photo with 100% natural, unedited colors
        ctx.drawImage(photoImg, dx, dy, dw, dh);
        ctx.restore();
      }

      // Frame border
      ctx.strokeStyle = borderBold;
      ctx.lineWidth = 3.5;
      roundRect(ctx, photoX, photoY, photoW, photoH, photoRadius);
      ctx.stroke();

      // ═════════════════ LOWER HALF: JUST NAME, DESIGNATION, COMPANY ═════════════════
      ctx.textAlign = 'center';

      // ── Name ──
      ctx.fillStyle = textPrimary;
      ctx.font = 'bold 70px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.fillText('DARSHAN P.', W / 2, 888);

      // ── Designation ──
      ctx.fillStyle = textSecondary;
      ctx.font = 'bold 30px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.letterSpacing = '2px';
      ctx.fillText('FULL STACK ENGINEER', W / 2, 946);

      // ── Company Pill Badge (careMP) ──
      const compPillW = 230;
      const compPillH = 54;
      const compPillX = (W - compPillW) / 2;
      const compPillY = 992;

      ctx.fillStyle = pillBg;
      roundRect(ctx, compPillX, compPillY, compPillW, compPillH, 27);
      ctx.fill();

      ctx.strokeStyle = pillBorder;
      ctx.lineWidth = 2;
      roundRect(ctx, compPillX, compPillY, compPillW, compPillH, 27);
      ctx.stroke();

      // Active status dot + Company Text inside pill
      ctx.beginPath();
      ctx.arc(compPillX + 38, compPillY + compPillH / 2, 6, 0, Math.PI * 2);
      ctx.fillStyle = accentGreen;
      ctx.fill();

      ctx.font = 'bold 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.fillStyle = textPrimary;
      ctx.textBaseline = 'middle';
      ctx.fillText('careMP', compPillX + 124, compPillY + compPillH / 2);
      ctx.textBaseline = 'alphabetic';

      // ── Divider ──
      ctx.strokeStyle = dividerCol;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(160, 1140);
      ctx.lineTo(W - 160, 1140);
      ctx.stroke();

      // ── Bottom Minimal Barcode & ID Number ──
      const barW = 440;
      const barH = 54;
      const barX = (W - barW) / 2;
      const barY = 1255;
      drawBarcode(ctx, barX, barY, barW, barH, isDark);

      ctx.font = 'bold 17px "SF Mono", Monaco, Menlo, monospace';
      ctx.fillStyle = textMuted;
      ctx.fillText('ID: #DEV-2026-8492', W / 2, barY + barH + 34);

      ctx.textAlign = 'left';

      // ── Outer Card Edge Border ──
      ctx.strokeStyle = borderBold;
      ctx.lineWidth = 6;
      roundRect(ctx, 3, 3, W - 6, H - 6, 30);
      ctx.stroke();

      // ═════════════════ BACK FACE ═════════════════
      const backCanvas = document.createElement('canvas');
      backCanvas.width = W;
      backCanvas.height = H;
      const bCtx = backCanvas.getContext('2d')!;
      bCtx.imageSmoothingEnabled = true;
      bCtx.imageSmoothingQuality = 'high';

      // Base background
      bCtx.fillStyle = bgCard;
      bCtx.fillRect(0, 0, W, H);

      // Magnetic Stripe across top
      bCtx.fillStyle = '#050607';
      bCtx.fillRect(0, 100, W, 130);

      // Center Back Information
      bCtx.textAlign = 'center';

      bCtx.fillStyle = textPrimary;
      bCtx.font = 'bold 38px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      bCtx.fillText('DARSHAN P.', W / 2, 420);

      bCtx.fillStyle = textSecondary;
      bCtx.font = 'bold 26px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      bCtx.fillText('Full Stack Engineer  •  careMP', W / 2, 472);

      // QR Code in Center
      const bQrSize = 220;
      const bQrX = (W - bQrSize) / 2;
      const bQrY = 560;
      drawMicroQR(bCtx, bQrX, bQrY, bQrSize, isDark);

      bCtx.font = 'bold 16px "SF Mono", Monaco, Menlo, monospace';
      bCtx.fillStyle = textMuted;
      bCtx.fillText('SCAN FOR PORTFOLIO', W / 2, bQrY + bQrSize + 40);

      // Bottom Barcode on Back
      drawBarcode(bCtx, barX, 1255, barW, barH, isDark);
      bCtx.fillText('ID: #DEV-2026-8492  •  AUTHORIZED', W / 2, 1255 + barH + 34);

      bCtx.textAlign = 'left';

      // Outer Border
      bCtx.strokeStyle = borderBold;
      bCtx.lineWidth = 6;
      roundRect(bCtx, 3, 3, W - 6, H - 6, 30);
      bCtx.stroke();

      resolve({
        front: frontCanvas.toDataURL('image/png'),
        back: backCanvas.toDataURL('image/png'),
      });
    };

    let rendered = false;
    const safeRender = () => {
      if (!rendered) {
        rendered = true;
        render();
      }
    };

    photoImg.onload = safeRender;
    photoImg.onerror = safeRender;
    if (photoImg.complete) {
      safeRender();
    }
  });
}

// ═════════════════ HELPER DRAWING FUNCTIONS ═════════════════

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function drawBarcode(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  isDark: boolean
) {
  const bars = [3, 1, 2, 1, 4, 1, 2, 3, 1, 2, 1, 3, 2, 1, 3, 1, 4, 1, 2, 1, 3, 2, 1, 2, 3, 1, 2, 4, 1, 2, 1, 3, 1, 2, 4, 1, 3];
  const totalUnits = bars.reduce((a, b) => a + b, 0);
  const unitW = w / totalUnits;
  const fill = isDark ? '#09090b' : 'rgba(255, 255, 255, 0.92)';

  let curX = x;
  ctx.fillStyle = fill;
  bars.forEach((barW, i) => {
    if (i % 2 === 0) {
      ctx.fillRect(curX, y, barW * unitW - 0.5, h);
    }
    curX += barW * unitW;
  });
}

function drawMicroQR(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  isDark: boolean
) {
  const fill = isDark ? '#09090b' : 'rgba(255, 255, 255, 0.92)';
  const bg   = isDark ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.08)';
  const bits = [
    [1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1],
    [1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1],
    [1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
    [1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1],
    [0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0],
    [1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0],
    [0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1],
    [1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1],
    [1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0],
    [1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1],
    [1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1],
    [1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1],
  ];

  ctx.fillStyle = bg;
  roundRect(ctx, x, y, size, size, 8);
  ctx.fill();

  const cellSize = size / bits.length;
  ctx.fillStyle = fill;
  for (let r = 0; r < bits.length; r++) {
    for (let c = 0; c < bits[r].length; c++) {
      if (bits[r][c]) {
        ctx.fillRect(x + c * cellSize + 0.5, y + r * cellSize + 0.5, cellSize - 1, cellSize - 1);
      }
    }
  }
}
