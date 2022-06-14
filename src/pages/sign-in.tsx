import { TextField } from 'components/Form/TextField';
import { Auth } from 'templates/Auth';
import { Email } from 'styled-icons/material-outlined';

export default function SignIn() {
  return (
    <Auth title="Sign in">
      <TextField
        name="email"
        label="Email"
        icon={<Email />}
        placeholder="Your email"
      />
    </Auth>
  );
}
