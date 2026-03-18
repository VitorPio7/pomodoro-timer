import './styles/theme.css';
import './styles/global.css';
import { Home } from './pages/Home';
import { Container } from './components/Container';

export function App() {
  return (
    <>
      <Container>
        <Home />
      </Container>
    </>
  );
}
