import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";


export function Tips() {
    const { state, dispatch } = useTaskContext()
    const tipsForWhenActiveTask = {
      worktTime:<span>Próximo ciclo é de {state.config.workTime}</span>,
      shortBreakTime: (
        <span>Proximo ciclo é de {state.config.shortBreakTime}</span>
      ),
      longBreakTime: <span>Próximo descanso será longo</span>
    }
     const tipsForNoActiveTask = {
       worktTime: <span>Próximo ciclo é de {state.config.workTime}</span>,
       shortBreakTime: (
         <span>Proximo ciclo é de {state.config.shortBreakTime}</span>
       ),
       longBreakTime: <span>Próximo descanso será longo</span>,
     }; 
    return (
      <>
        {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
        {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
      </>
    );
}