import { Container } from 'components/Container';
import { Stack } from 'components/Stack';
import { useTheme } from 'styled-components';
import { Base } from 'templates/Base';
import { LastQuestion } from './components/LastQuestion';
import { Navigator } from './components/Navigator';
import { SeeAllQuestions } from './components/SeeAllQuestions';
import { Subjects } from './components/Subjects';

import subjectsMock from './components/Subjects/mock';

export function Home() {
  const theme = useTheme();

  return (
    <Base>
      <Container>
        <Stack spacing={theme.spacings.small}>
          <Navigator />
          <Subjects items={subjectsMock} />

          <Stack direction="row" spacing={theme.spacings.small}>
            <LastQuestion />
            <SeeAllQuestions />
          </Stack>
        </Stack>
      </Container>
    </Base>
  );
}
