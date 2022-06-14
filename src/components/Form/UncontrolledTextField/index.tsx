import * as S from './styles';

export type UncontrolledTextFieldProps = {
  iconPosition?: 'left' | 'right';
  icon?: React.ReactNode;
  label?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function UncontrolledTextField({
  placeholder,
  label,
  name,
  icon,
  error,
  disabled = false,
  iconPosition = 'left',
  ...props
}: UncontrolledTextFieldProps) {
  return (
    <S.Wrapper disabled={disabled} error={!!error}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}

      <S.ControlWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Control
          iconPosition={iconPosition}
          disabled={disabled}
          placeholder={placeholder ?? 'Type...'}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </S.ControlWrapper>

      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  );
}
