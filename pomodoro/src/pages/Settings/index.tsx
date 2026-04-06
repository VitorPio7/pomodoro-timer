import { useEffect, useRef } from 'react';
import { Container } from '../../components/Container';
import { MainTemplate } from '../../templates/MainTemplate';
import { Heading } from '../../components/Heading';
import { DefaultInput } from '../../components/DefaultInput';
import { SaveIcon } from 'lucide-react';
import { DefaultButton } from '../../components/DefaultButton';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { showMessage } from '../../adapters/showMessage';

export function Settings() {
  useEffect(() => {
    document.title = 'Settings';
  }, []);

  const { state } = useTaskContext();

  const workTimeInput = useRef<HTMLInputElement>(null);

  const shortBreakTimeInput = useRef<HTMLInputElement>(null);

  const longBreakTimeInput = useRef<HTMLInputElement>(null);

  function handleSaveSettings(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    showMessage.dismiss();
    const workTime = Number(workTimeInput.current?.value);
    const shortBreakTime = Number(shortBreakTimeInput.current?.value);
    const longBreakTime = Number(longBreakTimeInput.current?.value);
    const formErrors = [];

    if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
      formErrors.push('Por favor use apenas números para TODOS os campos');
    }
    if (workTime < 1 || workTime > 99) {
      formErrors.push('Digite valores entre 1 e 99 para foco');
    }
    if (shortBreakTime < 1 || shortBreakTime > 30) {
      formErrors.push('Digite valores entre 1 e 30 para descanso curto');
    }

    if (longBreakTime < 1 || longBreakTime > 60) {
     formErrors.push('Digite valores entre 1 e 60 para descanso longo')
    }

    if (formErrors.length > 0) {
      formErrors.forEach(error => {
        showMessage.error(error);
      });
      return;
    }
    console.log('SALVAR');
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>Configurações</Heading>
      </Container>
      <Container>
        <p style={{ textAlign: 'center' }}>
          Modifique as Configurações para tempo de descanso curto e longo{' '}
        </p>
      </Container>
      <Container>
        <form onSubmit={handleSaveSettings} action='' className='form'>
          <div className='formRow'>
            <DefaultInput
              id='workTime'
              labelText='Foco'
              ref={workTimeInput}
              defaultValue={state.config.workTime}
              type='number'
            />
          </div>
          <div className='formRow'>
            <DefaultInput
              id='shortBreakTime'
              labelText='Descanso curto'
              ref={shortBreakTimeInput}
              defaultValue={state.config.shortBreakTime}
              type='number'
            />
          </div>
          <div className='formRow'>
            <DefaultInput
              id='longBreakTime'
              labelText='Descanso longo'
              ref={longBreakTimeInput}
              defaultValue={state.config.longBreakTime}
              type='number'
            />
          </div>
          <div className='formRow'>
            <DefaultButton
              icon={<SaveIcon />}
              aria-label='Salvar configurações'
              defaultValue={state.config.shortBreakTime}
            />
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}
