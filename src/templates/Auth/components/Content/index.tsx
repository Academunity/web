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
        <S.Content>
          <Stack spacing={theme.spacings.small}>
            <S.FormTitle>{title}</S.FormTitle>
            {children}
          </Stack>
        </S.Content>
      </S.Card>
    </S.Container>
  );
}
