import { render, screen } from 'utils/tests';

import { Home } from '.';

jest.mock('./components/Navigator', () => ({
  __esModule: true,
  Navigator: () => <div data-testid="navigator" />,
}));

describe('<Home />', () => {
  it('should render the navigator', () => {
    render(<Home />);

    expect(screen.getByTestId('navigator')).toBeInTheDocument();
  });
});
