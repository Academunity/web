import { screen, render } from 'utils/tests';
import { Content } from '.';

const props = {
  title: 'Sign in',
  children: <input type="text" />,
};

describe('<Auth />', () => {
  it('should render the title and children', () => {
    render(<Content {...props} />);

    expect(
      screen.getByRole('heading', { name: /sign in/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
