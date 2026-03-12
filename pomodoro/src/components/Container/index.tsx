//Export the components easily
import styles from './styles.module.css';
type ContainderProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainderProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <section>{children}</section>
      </div>
    </div>
  );
}
    