import { Card } from 'components/Card';
import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'styled-icons/boxicons-logos';
import { useTheme } from 'styled-components';
import { Stack } from 'components/Stack';
import * as S from './styles';

type AuthProps = {
  title: string;
  children: React.ReactNode;
};

export function Auth({ title, children }: AuthProps) {
  const theme = useTheme();

  return (
    <S.Container>
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

      <S.Content>
        <Card>
          <S.Form>
            <Stack spacing={theme.spacings.small}>
              <S.FormTitle>{title}</S.FormTitle>
              {children}
            </Stack>
          </S.Form>
        </Card>
      </S.Content>
    </S.Container>
  );
}
