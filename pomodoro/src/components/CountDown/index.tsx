import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import styles from './styles.module.css';

export function CountDown() {
  //Vai pegar o estado global indicado
  const { state, setState } = useTaskContext();
  return (
    <div className={styles.container}>{state.formattedSecondsRemaining}</div>
  );
}
