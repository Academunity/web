import { TextField } from 'components/Form/TextField';
import { Auth } from 'templates/Auth';
import { Email } from 'styled-icons/material-outlined';
import { FieldValues, useForm } from 'react-hook-form';

export default function SignIn() {
  const { control } = useForm<FieldValues>();

  return (
    <Auth title="Sign in">
      <TextField
        name="email"
        control={control}
        label="Email"
        icon={<Email />}
        placeholder="Your email"
      />
    </Auth>
  );
}
