import { Container } from 'components/Container';
import { Base } from 'templates/Base';
import { Navigator } from './components/Navigator';

export function Home() {
  return (
    <Base>
      <Container>
        <Navigator />
      </Container>
    </Base>
  );
}
