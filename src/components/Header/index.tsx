import Link from 'next/link';
import { ChevronDown } from 'styled-icons/feather';
import { Menu } from './components/Menu';
import * as S from './styles';

export function Header() {
  return (
    <S.Wrapper>
      <Link href="/" passHref>
        <a>
          <S.Title>Academunity</S.Title>
        </a>
      </Link>

      <Menu />

      <S.Profile>
        <S.ProfilePicture aria-label="User profile" />
        <ChevronDown size={15} />
      </S.Profile>
    </S.Wrapper>
  );
}
