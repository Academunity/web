import { Stack } from 'components/Stack';
import { ControllerRenderProps, FieldValues } from 'react-hook-form';
import { useTheme } from 'styled-components';
import * as S from './styles';

export type UncontrolledTextFieldProps = {
  iconPosition?: 'left' | 'right';
  icon?: React.ReactNode;
  label?: string;
  error?: string;
  field?: ControllerRenderProps<FieldValues, string>;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function UncontrolledTextField({
  placeholder,
  label,
  name,
  icon,
  error,
  field,
  disabled = false,
  iconPosition = 'left',
  ...props
}: UncontrolledTextFieldProps) {
  const theme = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    field?.onChange(e.target.value);
    if (props.onChange) props.onChange(e);
  };

  return (
    <S.Wrapper disabled={disabled} error={!!error}>
      <Stack spacing={theme.spacings.xxxsmall}>
        {!!label && <S.Label htmlFor={name}>{label}</S.Label>}

        <S.ControlWrapper>
          {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}

          <S.Control
            iconPosition={iconPosition}
            disabled={disabled}
            placeholder={placeholder ?? 'Type...'}
            {...(label ? { id: name } : {})}
            {...(field || {})}
            {...props}
            onChange={handleChange}
          />
        </S.ControlWrapper>

        {!!error && <S.Error>{error}</S.Error>}
      </Stack>
    </S.Wrapper>
  );
}
