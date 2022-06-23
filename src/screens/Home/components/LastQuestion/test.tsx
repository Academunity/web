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
      screen.getByRole('link', {
        name: /Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi urna ex, dapibus in finibus quis\.\.\./i,
      }),
    ).toHaveAttribute('href', '/question/1');
  });

  it('should render subject as link', () => {
    render(<LastQuestion />);

    expect(
      screen.getByRole('link', {
        name: /Mathematics - Statistics/i,
      }),
    ).toHaveAttribute('href', '/subjects/math');
  });

  it('should render mark as completed button', () => {
    render(<LastQuestion />);

    expect(screen.getByLabelText('Mark as completed')).toBeInTheDocument();
  });

  it('should render dismiss button', () => {
    render(<LastQuestion />);

    expect(screen.getByLabelText('Dismiss')).toBeInTheDocument();
  });
});
