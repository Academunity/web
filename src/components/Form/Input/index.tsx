import * as S from './styles';

export type InputProps = {
  iconPosition?: 'left' | 'right';
  icon?: React.ReactNode;
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input({
  placeholder,
  label,
  name,
  icon,
  disabled = false,
  iconPosition = 'left',
  ...props
}: InputProps) {
  return (
    <S.Wrapper disabled={disabled} error={false}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}

      <S.ControlWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Control
          iconPosition={iconPosition}
          placeholder={placeholder ?? 'Type...'}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </S.ControlWrapper>

      {/* {!!error && <S.Error>{error}</S.Error>} */}
    </S.Wrapper>
  );
}
