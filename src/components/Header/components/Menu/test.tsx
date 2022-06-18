import { render, screen } from 'utils/tests';

import { Menu } from '.';

describe('<Menu />', () => {
  it('should render correctly', () => {
    render(<Menu />);

    expect(screen.getByRole('link', { name: /aprender/i })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /meu perfil/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /placar de líderes/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /fórum/i })).toBeInTheDocument();
  });
});
