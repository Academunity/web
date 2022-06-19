import { render, screen } from 'utils/tests';

import { Navigator } from '.';

describe('<Navigator />', () => {
  it('should render nav links and current page', () => {
    render(<Navigator />);

    expect(screen.getByRole('link', { name: /tutoriais/i })).toHaveAttribute(
      'href',
      '/tutorials',
    );
    expect(screen.getByRole('link', { name: /estatísticas/i })).toHaveAttribute(
      'href',
      '/analytics',
    );
    expect(screen.getByText('Página inicial')).toBeInTheDocument();
  });
});
