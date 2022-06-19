import { Button } from 'components/Button';
import { TextField } from 'components/Form/TextField';
import { Stack } from 'components/Stack';
import { useForm } from 'react-hook-form';
import { useTheme } from 'styled-components';
import { Email, Lock } from 'styled-icons/material-outlined';

type FormSignInValues = {
  email: string;
  password: string;
};

export function FormSignIn() {
  const { control } = useForm<FormSignInValues>();

  const theme = useTheme();

  return (
    <Stack spacing={theme.spacings.xsmall}>
      <TextField
        name="email"
        control={control}
        label="Email"
        icon={<Email />}
        placeholder="test@test.com"
      />

      <TextField
        type="password"
        name="password"
        control={control}
        label="Password"
        icon={<Lock />}
        placeholder="*********"
      />

      <Stack spacing={theme.spacings.xxsmall}>
        <Button size="large" fullWidth>
          Sign in
        </Button>

        <Button as="a" href="/sign-up" size="small" minimal fullWidth>
          Create an account
        </Button>
      </Stack>
    </Stack>
  );
}
