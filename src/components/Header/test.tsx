import { render, screen } from 'utils/tests';

import { Header } from '.';

jest.mock('components/Header/components/Menu', () => ({
  __esModule: true,
  Menu: () => <div data-testid="menu" />,
}));

describe('<Menu />', () => {
  it('should render logo, menu and profile', () => {
    render(<Header />);

    expect(
      screen.getByRole('heading', { name: /Academunity/i }),
    ).toBeInTheDocument();

    expect(screen.getByTestId('menu')).toBeInTheDocument();
    expect(screen.getByLabelText('User profile')).toBeInTheDocument();
  });
});
