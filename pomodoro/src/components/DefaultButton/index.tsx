import type React from 'react';
import styles from './styles.module.css';

type DefaultButtonProps = {
  icon: React.ReactNode;
  color?: 'green' | 'red'; // allows us to pass any React element as an icon, like an SVG or a FontAwesome icon
} & React.ComponentProps<'button'>; // allow us to implement all the properties of an button element, like placeholder, value, onChange, etc.

export function DefaultButton({
  icon,
  color = 'green',
  ...props
}: DefaultButtonProps) {
  return (
    <>
      <button className={`${styles.button} ${styles[color]}`} {...props}>
        {icon}
      </button>
    </>
  );
}
