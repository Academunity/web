import Link from 'next/link';
import { useTheme } from 'styled-components';
import { Facebook, Twitter, Instagram } from 'styled-icons/boxicons-logos';
import * as S from './styles';

export function Brand() {
  const theme = useTheme();

  return (
    <S.Brand>
      <S.Infos>
        <S.Title>Academunity</S.Title>
        <S.Description>
          Nulla rutrum lectus orci, vitae luctus augue vestibulum quis. Morbi
          imperdiet
        </S.Description>
      </S.Infos>

      <S.SocialLogos>
        <Link href="https://facebook.com" passHref>
          <a target="_blank" aria-label="Facebook">
            <Facebook color={theme.colors.white} size={32} />
          </a>
        </Link>

        <Link href="https://twitter.com" passHref>
          <a target="_blank" aria-label="Twitter">
            <Twitter color={theme.colors.white} size={32} />
          </a>
        </Link>

        <Link href="https://instagram.com" passHref>
          <a target="_blank" aria-label="Instagram">
            <Instagram color={theme.colors.white} size={32} />
          </a>
        </Link>
      </S.SocialLogos>
    </S.Brand>
  );
}
