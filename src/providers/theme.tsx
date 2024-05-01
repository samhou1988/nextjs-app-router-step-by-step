'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const initialState: ThemeContextType = {
  theme: '',
  setTheme: () => {},
}

export const ThemeContext = createContext(initialState);

export function ThemeProvider({ children, defaultTheme }: { children: React.ReactNode, defaultTheme: string}) {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme || defaultTheme;
  });

  const setAndStoreTheme = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);

    // Add a class to the body to apply the theme
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
  }

  useEffect(() => {
    // Apply the theme class on initial render
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: setAndStoreTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const state = useContext(ThemeContext);
  if (!state) throw new Error('useTheme must be used within a ThemeProvider');
  return state;
}
