import { render, screen } from 'utils/tests';

import { ColoredCircle } from '.';

describe('<ColoredCircle />', () => {
  it('should render correctly', () => {
    render(<ColoredCircle />);

    expect(
      screen.getByRole('heading', { name: /ColoredCircle/i }),
    ).toBeInTheDocument();
  });
});
