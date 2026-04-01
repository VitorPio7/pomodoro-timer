import { TrashIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { Heading } from '../../components/Heading';
import { MainForm } from '../../components/MainForm';
import { MainTemplate } from '../../templates/MainTemplate';
import styles from './styles.module.css';
//This is the template to use in every single page, it's like a template that doesn't change

export function History() {
  return (
    <MainTemplate>
      <Container>
        <Heading>
          <span className={styles.buttonContainer}>History</span>
          <span>
            <DefaultButton
              icon={<TrashIcon />}
              color='red'
              aria-label='apagar todo o historico'
              title='Apagar histórico'
            />
          </span>
        </Heading>
      </Container>
      <Container >
        <div className={styles.responsiveTable}>
          <table>
            <thead>
              <tr>
                <th>Tarefa</th>
                <th>Duração</th>
                <th>Data</th>
                <th>Status</th>
                <th>Tipo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>e</td>

              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </MainTemplate>
  );
}
