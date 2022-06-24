import * as S from './styles';

export function SeeAllQuestions() {
  return (
    <S.Wrapper as="a" href="/questions" aria-label="View all">
      <span>View all</span>
    </S.Wrapper>
  );
}
