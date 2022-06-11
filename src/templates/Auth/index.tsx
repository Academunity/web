import Link from 'next/link';
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from 'react-icons/io';
import { useTheme } from 'styled-components';
import * as S from './styles';

type AuthProps = {
  title: string;
  children: React.ReactNode;
};

export function Auth({ title, children }: AuthProps) {
  const theme = useTheme();

  return (
    <S.Container title={title}>
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
            <a target="_blank">
              <IoLogoFacebook color={theme.colors.white} size={32} />
            </a>
          </Link>

          <Link href="https://twitter.com" passHref>
            <a target="_blank">
              <IoLogoTwitter color={theme.colors.white} size={32} />
            </a>
          </Link>

          <Link href="https://instagram.com" passHref>
            <a target="_blank">
              <IoLogoInstagram color={theme.colors.white} size={32} />
            </a>
          </Link>
        </S.SocialLogos>
      </S.Brand>

      <S.Content>{children}</S.Content>
    </S.Container>
  );
}
