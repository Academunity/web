import { render, screen } from 'utils/tests';

import { LastQuestion } from '.';

describe('<LastQuestion />', () => {
  it('should render infos', () => {
    render(<LastQuestion />);

    expect(screen.getByText('Keep doing')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi urna ex, dapibus in finibus quis...',
      ),
    ).toBeInTheDocument();
  });

  it('should render as link', () => {
    render(<LastQuestion />);

    expect(
      screen.getByRole('link', { name: /resume last question/i }),
    ).toHaveAttribute('href', '/question/1');
  });
});
