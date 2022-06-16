import { TextField } from 'components/Form/TextField';
import { Auth } from 'templates/Auth';
import { Email, Lock } from 'styled-icons/material-outlined';
import { FieldValues, useForm } from 'react-hook-form';
import { Stack } from 'components/Stack';
import { useTheme } from 'styled-components';

export default function SignIn() {
  const { control } = useForm<FieldValues>();

  const theme = useTheme();

  return (
    <Auth title="Sign in">
      <Stack spacing={theme.spacings.xsmall}>
        <TextField
          name="email"
          control={control}
          label="Email"
          icon={<Email />}
          placeholder="Your email"
        />

        <TextField
          type="password"
          name="password"
          control={control}
          label="Password"
          icon={<Lock />}
          placeholder="Your password"
        />
      </Stack>
    </Auth>
  );
}
