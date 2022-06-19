import { Subject, SubjectProps } from 'components/Subject';
import * as S from './styles';

type SubjectsProps = {
  items: SubjectProps[];
};

export function Subjects({ items }: SubjectsProps) {
  return (
    <S.Wrapper>
      {items.map(({ color, children, slug }) => (
        <Subject key={slug} color={color} slug={slug}>
          {children}
        </Subject>
      ))}
    </S.Wrapper>
  );
}
