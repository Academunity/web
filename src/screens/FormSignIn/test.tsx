import { render, screen } from 'utils/tests';

import { FormSignIn } from '.';

describe('<FormSignIn />', () => {
  it('should render email and password fields and sign in and sign up buttons', () => {
    render(<FormSignIn />);

    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /sign in/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('link', { name: /create an account/i }),
    ).toHaveAttribute('href', '/sign-up');
  });
});
