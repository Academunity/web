import { BookmarkFill } from '@styled-icons/bootstrap';
import { ColoredCircle } from 'components/ColoredCircle';
import { SmallText } from 'components/SmallText';
import { useTheme } from 'styled-components';
import { CheckboxBlankCircle } from '@styled-icons/remix-line';
import { Close } from '@styled-icons/material-outlined';
import Link from 'next/link';
import * as S from './styles';

export function LastQuestion() {
  const theme = useTheme();

  return (
    <S.Wrapper>
      <S.MainInfoWrapper>
        <BookmarkFill size={32} color={theme.colors.white} />

        <S.MainInfo>
          <SmallText>Keep answering</SmallText>

          <Link href="/question/1" passHref>
            <S.Text
              as="a"
              aria-label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi urna ex, dapibus in finibus quis..."
              numberOfLines={1}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              urna ex, dapibus in finibus quis...
            </S.Text>
          </Link>
        </S.MainInfo>
      </S.MainInfoWrapper>

      <S.Info>
        <ColoredCircle color="#FF4747" />

        <Link href="/subjects/math" passHref>
          <S.Text as="a" aria-label="Mathematics - Statistics">
            Mathematics - Statistics
          </S.Text>
        </Link>
      </S.Info>

      <S.Info>
        <CheckboxBlankCircle size={20} color="#26FF56" />
        <S.Text aria-label="Mark as completed">Mark as completed</S.Text>
      </S.Info>

      <S.Dismiss aria-label="Dismiss">
        <Close size={20} color={theme.colors.danger} />
      </S.Dismiss>
    </S.Wrapper>
  );
}
