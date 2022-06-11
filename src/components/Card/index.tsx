import * as S from './styles';

export type CardProps = {
  children: React.ReactNode;
};

export function Card({ children }: CardProps) {
  return <S.Wrapper>{children}</S.Wrapper>;
}
