import { Input } from 'components/Form/Input';
import { Auth } from 'templates/Auth';

export default function SignIn() {
  return (
    <Auth title="Sign in">
      <Input placeholder="Your email" />
    </Auth>
  );
}
