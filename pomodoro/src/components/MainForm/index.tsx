import { PlayCircleIcon } from 'lucide-react';
import { DefaultButton } from '../DefaultButton';
import { Cycles } from '../Cycles';
import { DefaultInput } from '../DefaultInput';

export function MainForm() {

  return (
    <form className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          placeholder='Digite sua tarefa'
          labelText='task'
          id='meuInput'
          type='text'
        />
      </div>
      <div className='formRow'>
        <p>Prómixo intervalo é de {state.config.workTime} min</p>
      </div>
      <div className='formRow'>
        <Cycles />
      </div>
      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
