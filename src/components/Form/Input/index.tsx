import * as S from './styles';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ placeholder, ...props }: InputProps) {
  return (
    <S.Wrapper>
      <S.Control placeholder={placeholder ?? 'Type...'} {...props} />
    </S.Wrapper>
  );
}
