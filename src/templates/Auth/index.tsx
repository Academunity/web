import * as S from './styles';
import { Brand } from './components/Brand';
import { Content } from './components/Content';

export type AuthProps = {
  title: string;
  children: React.ReactNode;
};

export function Auth(props: AuthProps) {
  return (
    <S.Container>
      <Brand />
      <Content {...props} />
    </S.Container>
  );
}
