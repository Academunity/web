import { BookmarkFill } from '@styled-icons/bootstrap';
import { SmallText } from 'components/SmallText';
import { useTheme } from 'styled-components';
import * as S from './styles';

export function LastQuestion() {
  const theme = useTheme();

  return (
    <S.Wrapper as="a" href="/question/1" aria-label="Resume last question">
      <S.MainInfoWrapper>
        <BookmarkFill size={32} color={theme.colors.white} />

        <S.MainInfo>
          <SmallText>Keep doing</SmallText>
          <S.Title>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi urna
            ex, dapibus in finibus quis...
          </S.Title>
        </S.MainInfo>
      </S.MainInfoWrapper>
    </S.Wrapper>
  );
}
