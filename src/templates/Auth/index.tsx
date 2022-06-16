import { Card } from 'components/Card';
import { Stack } from 'components/Stack';
import { useTheme } from 'styled-components';
import * as S from './styles';
import { Brand } from './components/Brand';

type AuthProps = {
  title: string;
  children: React.ReactNode;
};

export function Auth({ title, children }: AuthProps) {
  const theme = useTheme();

  return (
    <S.Container>
      <Brand />

      <S.Content>
        <Card>
          <S.Form>
            <Stack spacing={theme.spacings.small}>
              <S.FormTitle>{title}</S.FormTitle>
              {children}
            </Stack>
          </S.Form>
        </Card>
      </S.Content>
    </S.Container>
  );
}
