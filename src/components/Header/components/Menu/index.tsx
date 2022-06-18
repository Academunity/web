import Link from 'next/link';
import * as S from './styles';

export function Menu() {
  return (
    <S.Wrapper>
      <S.Nav>
        <Link href="/" passHref>
          <S.NavItem active>Aprender</S.NavItem>
        </Link>

        <Link href="/profile" passHref>
          <S.NavItem>Meu Perfil</S.NavItem>
        </Link>

        <Link href="/leaderboard" passHref>
          <S.NavItem>Placar de líderes</S.NavItem>
        </Link>

        <Link href="/forum" passHref>
          <S.NavItem>Fórum</S.NavItem>
        </Link>
      </S.Nav>
    </S.Wrapper>
  );
}
