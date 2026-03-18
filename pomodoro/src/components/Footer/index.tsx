import styles from './styles.module.css';

type FooterProps = {
  children: React.ReactNode;
};

export function Footer() {
  return <footer className={styles.footer}>
    <a href="#">Entenda como funciona o Pomodoro</a>
    <a href="">Pomodoro-timer &copy; {new Date().getFullYear()} - Feito com ❤️ por Vitor Pio Vieira</a>
  </footer>;
}