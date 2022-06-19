import { Header } from 'components/Header';
import * as S from './styles';

type BaseProps = {
  children: React.ReactNode;
};

export function Base({ children }: BaseProps) {
  return (
    <S.Wrapper>
      <Header />
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  );
}
