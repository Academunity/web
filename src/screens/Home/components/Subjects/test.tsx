import { render, screen } from 'utils/tests';

import { Subjects } from '.';

import subjectsMock from './mock';

describe('<Subjects />', () => {
  it('should render correctly', () => {
    render(<Subjects items={subjectsMock.slice(0, 2)} />);

    expect(screen.getAllByRole('link')).toHaveLength(2);
  });
});
