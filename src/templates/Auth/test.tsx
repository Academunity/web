import { screen, render } from 'utils/tests';
import { Auth } from '.';

const props = {
  title: 'Sign in',
  children: <input type="text" />,
};

describe('<Auth />', () => {
  it('should render the brand infos', () => {
    render(<Auth {...props} />);

    expect(
      screen.getByRole('heading', { name: /academunity/i }),
    ).toBeInTheDocument();

    expect(screen.getByText(/nulla rutrum lectus orci/i)).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /instagram/i }),
    ).toBeInTheDocument();
  });

  it('should render the children', () => {
    render(<Auth {...props} />);

    expect(
      screen.getByRole('heading', { name: /sign in/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
