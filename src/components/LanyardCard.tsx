import React, { useEffect, useState } from 'react';
import Lanyard from './Lanyard';
import { generateCardTextureUrls } from './cardTextureGenerator';

import { useTheme } from '../context/ThemeContext';

export const LanyardCard: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [textures, setTextures] = useState<{ front: string; back: string } | null>(null);

  useEffect(() => {
    generateCardTextureUrls(isDark).then((res) => {
      setTextures(res);
    });
  }, [isDark]);

  return (
    <div className="w-full h-full flex items-center justify-center relative select-none z-50 overflow-visible">
      <Lanyard
        position={[0, -0.05, 16.0]}
        gravity={[0, -38, 0]}
        fov={20}
        transparent={true}
        frontImage={textures?.front || '/darshan-photo.jpg'}
        backImage={textures?.back || '/darshan-photo.jpg'}
        imageFit="cover"
        lanyardWidth={1.15}
        cardScale={1.75}
      />
    </div>
  );
};
