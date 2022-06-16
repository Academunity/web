import { Stack } from 'components/Stack';
import { useTheme } from 'styled-components';
import { AuthProps } from 'templates/Auth';
import * as S from './styles';

type ContentProps = AuthProps;

export function Content({ title, children }: ContentProps) {
  const theme = useTheme();

  return (
    <S.Container>
      <S.Card>
        <S.Form>
          <Stack spacing={theme.spacings.small}>
            <S.FormTitle>{title}</S.FormTitle>
            {children}
          </Stack>
        </S.Form>
      </S.Card>
    </S.Container>
  );
}
