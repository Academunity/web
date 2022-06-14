import { render, screen } from 'utils/tests';

import { Input } from '.';

describe('<Input />', () => {
  it('should render correctly', () => {
    render(<Input />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
