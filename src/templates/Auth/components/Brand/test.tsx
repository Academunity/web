import { render, screen } from 'utils/tests';
import { Brand } from '.';

describe('<Auth />', () => {
  it('should render the brand infos', () => {
    render(<Brand />);

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
});
