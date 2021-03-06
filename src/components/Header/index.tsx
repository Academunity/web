import Link from 'next/link';
import { useTheme } from 'styled-components';
import { ArrowDropDown } from 'styled-icons/material-outlined';
import { Menu } from './components/Menu';
import * as S from './styles';

export function Header() {
  const theme = useTheme();

  return (
    <S.Wrapper>
      <S.Content>
        <Link href="/" passHref>
          <S.Title>
            <h1>Academunity</h1>
          </S.Title>
        </Link>

        <Menu />

        <S.Profile>
          <S.ProfilePicture aria-label="User profile" />
          <ArrowDropDown size={15} color={theme.colors.primary} />
        </S.Profile>
      </S.Content>
    </S.Wrapper>
  );
}
