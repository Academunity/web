import { render, screen } from 'utils/tests';
import { Email } from 'styled-icons/material-outlined';

import { Button } from '.';

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = render(<Button>Sign in</Button>);

    expect(screen.getByRole('button', { name: /Sign in/i })).toHaveStyle({
      height: '4rem',
      'font-size': '1.4rem',
      padding: '0.8rem 3.2rem',
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the small size', () => {
    render(<Button size="small">Sign in</Button>);

    expect(screen.getByRole('button', { name: /Sign in/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem',
    });
  });

  it('should render the large size', () => {
    render(<Button size="large">Sign in</Button>);

    expect(screen.getByRole('button', { name: /Sign in/i })).toHaveStyle({
      height: '5rem',
      'font-size': '1.6rem',
      padding: '0.8rem 4.5rem',
    });
  });

  it('should render a full width version', () => {
    render(<Button fullWidth>Sign in</Button>);

    expect(screen.getByRole('button', { name: /Sign in/i })).toHaveStyle({
      width: '100%',
    });
  });

  it('should render an icon version', () => {
    render(<Button icon={<Email data-testid="icon" />}>Sign in</Button>);

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
    expect(screen.getByTestId(/icon/i)).toBeInTheDocument();
  });

  it('should render a minimal version', () => {
    render(
      <Button icon={<Email data-testid="icon" />} minimal>
        Sign in
      </Button>,
    );

    expect(screen.getByRole('button', { name: /Sign in/i })).toHaveStyle({
      background: 'none',
      color: '#BA75FF',
    });

    expect(screen.getByRole('button', { name: /Sign in/i })).toHaveStyleRule(
      'background',
      'none',
      {
        modifier: ':hover',
      },
    );
  });

  it('should render a disabled button', () => {
    render(<Button disabled>Sign in</Button>);

    expect(screen.getByRole('button', { name: /Sign in/i })).toHaveStyleRule(
      'cursor',
      'not-allowed',
      {
        modifier: ':disabled',
      },
    );
  });

  it('should render Button as a link', () => {
    render(
      <Button as="a" href="/link">
        Sign in
      </Button>,
    );

    expect(screen.getByRole('link', { name: /Sign in/i })).toHaveAttribute(
      'href',
      '/link',
    );
  });
});
