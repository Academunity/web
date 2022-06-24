import { render, screen } from 'utils/tests';

import { SeeAllQuestions } from '.';

describe('<SeeAllQuestions />', () => {
  it('should render correctly', () => {
    const { container } = render(<SeeAllQuestions />);

    expect(screen.getByText('View all')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'View all' })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
