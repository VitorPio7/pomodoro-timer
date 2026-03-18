import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
  TimerIcon,
} from 'lucide-react';
import styles from './styles.module.css';

import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';
export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
  // Is going to get the current state in our storage
    const storageTheme =
      (localStorage.getItem('theme') as AvailableThemes) || 'dark';
    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <MoonIcon/>,
    light: <SunIcon/>
  }

  function handleThemeChange(evento: React.MouseEvent<HTMLAnchorElement>) {
    evento.preventDefault();
    setTheme(prev => {
      const nextTheme = prev === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }
  //We have to use UseEffect to change the colateral effect of our app
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    //Local storage allows to keep our state inside the browser storage
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className={styles.menu}>
      <a
        className={styles.menuLink}
        aria-label='Ir para a Home'
        title='Ir para a Home'
        href='#'
      >
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        aria-label='Ir para o Histórico'
        title='Ir para o Histórico'
        href='#'
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        aria-label='Ir para as Configurações'
        title='Ir para as Configurações'
        href='#'
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        aria-label='Ir para o Modo Noturno'
        title='Ir para o Modo Noturno'
        href='#'
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </div>
  );
}
