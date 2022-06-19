import { render, screen } from 'utils/tests';

import { Base } from '.';

jest.mock('components/Header', () => ({
  __esModule: true,
  Header: () => <div data-testid="header" />,
}));

describe('<Base />', () => {
  it('should render the header and content', () => {
    render(<Base>This is the base template</Base>);

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByText(/this is the base template/i)).toBeInTheDocument();
  });
});
