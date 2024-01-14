'use client';

import { ThemeProvider } from 'next-themes';

export default function Providers({ children }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="min-h-screen transition-colors duration-300 select-none text-zinc-700 dark:text-neutral-100 dark:bg-zinc-700">
        {children}
      </div>
    </ThemeProvider>
  );
}
