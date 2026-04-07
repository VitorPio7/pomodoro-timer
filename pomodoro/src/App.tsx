import './styles/theme.css';
import './styles/global.css';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { MessagesContainer } from './components/MessagesContainer';
import { MainRouter } from './routers/MainRouter';
export function App() {
  return (
    //The provider is gonna to 'turn on' the context api
    //React router doom is good to prevent re-render unecessarily components
    <TaskContextProvider>
      <MessagesContainer>
        <MainRouter/>
      </MessagesContainer>
    </TaskContextProvider>
  );
}
