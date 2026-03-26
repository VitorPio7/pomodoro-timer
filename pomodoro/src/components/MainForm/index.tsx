import { PlayCircleIcon, StopCircle } from 'lucide-react';
import { DefaultButton } from '../DefaultButton';
import { Cycles } from '../Cycles';
import { DefaultInput } from '../DefaultInput';
import type React from 'react';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { formattedSecondsToMinutes } from '../../utils/formatSecondsToMinuts';

export function MainForm() {
  const { state, setState } = useTaskContext();

  const taskNameInput = useRef<HTMLInputElement>(null); // We can use to store any value and dont re-render the component

  const nextCycle = getNextCycle(state.currentCycle);

  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (taskName.length === 0) {
      alert('Digite uma tarefa válida');
      return;
    }
    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: 1,
      type: nextCycleType,
    };
    const secondsRemaining = newTask.duration * 60;

    setState(prevState => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: formattedSecondsToMinutes(secondsRemaining),
        tasks: [...prevState.tasks, newTask],
      };
    });
  }
 function handleInterruptTask(e : React.MouseEvent<HTMLButtonElement, MouseEvent>) {
  e.preventDefault();
      setState(prevState => {
        return {
          ...prevState,
          activeTask: null,
          secondsRemaining:0,
          formattedSecondsRemaining: '00:00',
          tasks: prevState.tasks.map(task => {
            if (prevState.activeTask && prevState.activeTask.id === task.id) {
              return { ...task, interruptDate: Date.now()}
            }
            return task
          })
        };
      });
 } 
  return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          placeholder='Digite sua tarefa'
          labelText='task'
          id='meuInput'
          type='text'
          ref={taskNameInput}
          disabled={!!state.activeTask}
        />
      </div>
      <div className='formRow'>
        <p>Prómixo intervalo é de 25 min</p>
      </div>
      {state.currentCycle > 0 && (
        <div className='formRow'>
          <Cycles />
        </div>
      )}

      <div className='formRow'>
        {!state.activeTask ? (
          <DefaultButton
            aria-label='Iniciar nova tarefa'
            title='Iniciar nova tarefa'
            type='submit'
            icon={<PlayCircleIcon />}
          />
        ) : (
          <DefaultButton
            aria-label='Parar tarefa atual'
            title='Parar tarefa atual'
            type='button'
            color='red'
            icon={<StopCircle />}
            onClick={handleInterruptTask}
          />
        )}
      </div>
    </form>
  );
}
