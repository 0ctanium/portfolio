import { useEffect, useState } from 'react';

export type Theme = 'light' | 'dark' | null;
export type UseTheme = () => Theme;

const useTheme: UseTheme = () => {
  const [theme, setTheme] = useState<Theme>(null);

  useEffect(() => {
    // Theme
    if (
      window.localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setTheme('dark');
    } else {
      setTheme('light');
    }

    function onThemeChange() {
      console.log(window.localStorage.getItem('theme'));
      setTheme(window.localStorage.getItem('theme') as Theme);
    }

    window.addEventListener('storage', onThemeChange, false);

    return () => {
      window.removeEventListener('storage', onThemeChange);
    };
  }, []);

  return theme;
};

export default useTheme;
