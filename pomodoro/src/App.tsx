import './styles/theme.css';
import './styles/global.css';
import { Home } from './pages/Home';
import {  TaskContextProvider } from './contexts/TaskContext';

export function App() {

  return (
    //The provider is gonna to 'turn on' the context api
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}
