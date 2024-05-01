'use client';

import { useTheme } from '@/providers/theme';
import { Moon, Sun } from 'lucide-react';

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header>
      <h1>Acme</h1>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        {theme === 'light' ? <Sun /> : <Moon />}
      </button>
    </header>
  );
}
