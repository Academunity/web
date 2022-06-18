import * as S from './styles';
import { Brand } from './components/Brand';
import { Content } from './components/Content';

export type AuthProps = {
  title: string;
  children: React.ReactNode;
};

export function Auth(props: AuthProps) {
  return (
    <S.Wrapper>
      <Brand />
      <Content {...props} />
    </S.Wrapper>
  );
}
