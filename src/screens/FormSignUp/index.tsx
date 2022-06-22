import { Button } from 'components/Button';
import { TextField } from 'components/Form/TextField';
import { Stack } from 'components/Stack';
import { FieldValues, useForm } from 'react-hook-form';
import { useTheme } from 'styled-components';
import { Email, Lock, Person } from 'styled-icons/material-outlined';
import { Auth } from 'templates/Auth';

export function FormSignUp() {
  const { control } = useForm<FieldValues>();

  const theme = useTheme();

  return (
    <Auth title="Sign up">
      <Stack spacing={theme.spacings.xsmall}>
        <Stack direction="row" spacing={theme.spacings.xsmall}>
          <TextField
            name="name"
            control={control}
            label="Name"
            icon={<Person />}
            placeholder="John Doe"
          />

          <TextField
            name="role"
            control={control}
            label="Tipo de cadastro"
            placeholder="Select"
          />
        </Stack>

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

        <TextField
          type="password"
          name="password_confirmation"
          control={control}
          label="Confirm your password"
          icon={<Lock />}
          placeholder="*********"
        />

        <Stack spacing={theme.spacings.xxsmall}>
          <Button size="large" fullWidth>
            Sign up
          </Button>

          <Button as="a" href="/sign-in" size="small" minimal fullWidth>
            I already have an account
          </Button>
        </Stack>
      </Stack>
    </Auth>
  );
}
