import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'styled-icons/material-outlined';
import * as S from './styles';

export function Navigator() {
  return (
    <S.Navigator>
      <Link href="/tutorials" passHref>
        <S.NavItem>
          <ChevronLeft size={21} />
          Tutoriais
        </S.NavItem>
      </Link>

      <S.CurrentPage>Página inicial</S.CurrentPage>

      <Link href="/analytics" passHref>
        <S.NavItem>
          Estatísticas
          <ChevronRight size={21} />
        </S.NavItem>
      </Link>
    </S.Navigator>
  );
}
