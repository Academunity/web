import { render, screen } from 'utils/tests';

import { FormSignUp } from '.';

describe('<FormSignUp />', () => {
  it('should render the fields and sign up and sign in buttons', () => {
    render(<FormSignUp />);

    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Tipo de cadastro')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByLabelText('Confirm your password')).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /sign up/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('link', { name: /i already have an account/i }),
    ).toHaveAttribute('href', '/sign-in');
  });
});
