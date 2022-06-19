import { Container } from 'components/Container';
import { Stack } from 'components/Stack';
import { useTheme } from 'styled-components';
import { Base } from 'templates/Base';
import { Navigator } from './components/Navigator';
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
        </Stack>
      </Container>
    </Base>
  );
}
