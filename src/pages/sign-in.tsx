import { FormSignIn } from 'screens/FormSignIn';
import { Auth } from 'templates/Auth';

export default function SignIn() {
  return (
    <Auth title="Sign in">
      <FormSignIn />
    </Auth>
  );
}
