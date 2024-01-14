'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

export default function ThemeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === 'system' ? systemTheme : theme;
  useEffect(() => setMounted(true), []);
  return (
    <div>
      {mounted &&
        (currentTheme === 'dark' ? (
          <MdLightMode
            onClick={() => setTheme('light')}
            className="text-xl cursor-pointer hover:text-amber-300"
          />
        ) : (
          <MdDarkMode
            onClick={() => setTheme('dark')}
            className="text-xl cursor-pointer hover:text-amber-600"
          />
        ))}
    </div>
  );
}
