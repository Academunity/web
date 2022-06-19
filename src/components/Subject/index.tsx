import Link from 'next/link';
import * as S from './styles';

export type SubjectProps = {
  children: React.ReactNode;
  color: string;
  slug?: string;
};

export function Subject({ children, color, slug }: SubjectProps) {
  const subject = (
    <S.Wrapper as={slug ? 'a' : 'div'} color={color} data-testid="wrapper">
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  );

  if (!slug) return subject;

  return (
    <Link href={`/${slug}`} passHref>
      {subject}
    </Link>
  );
}
