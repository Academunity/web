import {
  UncontrolledTextField,
  UncontrolledTextFieldProps,
} from 'components/Form/UncontrolledTextField';
import { useController, UseControllerProps } from 'react-hook-form';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TextFieldProps = UncontrolledTextFieldProps & UseControllerProps<any>;

export function TextField({
  name,
  rules,
  shouldUnregister,
  defaultValue,
  control,
  ...props
}: TextFieldProps) {
  const { field, fieldState } = useController({
    name,
    rules,
    shouldUnregister,
    defaultValue,
    control,
  });

  return (
    <UncontrolledTextField
      error={props.error || fieldState.error?.message}
      field={field}
      name={name}
      value={field.value ?? ''}
      {...props}
    />
  );
}
