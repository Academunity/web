import {
  UncontrolledTextField,
  UncontrolledTextFieldProps,
} from 'components/Form/UncontrolledTextField';
import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';

type TextFieldProps = UncontrolledTextFieldProps &
  UseControllerProps<FieldValues>;

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
      {...props}
    />
  );
}
