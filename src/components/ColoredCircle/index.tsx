import * as S from './styles';

export type ColoredCircleProps = {
  color: string;
};

export function ColoredCircle({ color }: ColoredCircleProps) {
  return (
    <S.Wrapper color={color}>
      <S.Circle />
    </S.Wrapper>
  );
}
