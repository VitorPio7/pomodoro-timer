import styles from './styles.module.css';
import { RouterLink } from '../RouterLink';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <RouterLink href='/about-pomodoro/'>
        Entenda como funciona o Pomodoro
      </RouterLink>
      <RouterLink href='/'>
        Pomodoro-timer &copy; {new Date().getFullYear()} - Feito com ❤️ por
        Vitor Pio Vieira
      </RouterLink>
    </footer>
  );
}