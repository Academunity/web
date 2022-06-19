import { render, screen } from 'utils/tests';

import { Subject } from '.';

const props = {
  children: 'Biology',
  color: '#26FF56',
};

describe('<Subject />', () => {
  it('should render correctly', () => {
    render(<Subject {...props} />);

    const wrapper = screen.getByTestId('wrapper');
    const name = screen.getByText('Biology');

    expect(wrapper).toContainElement(name);
    expect(wrapper).toHaveStyle({ border: '1px solid #26FF56' });
    expect(wrapper).not.toHaveAttribute('href');

    expect(name).toHaveStyle({ color: '#26FF56' });
  });

  it('should render as link', () => {
    render(<Subject {...props} slug="biology" />);

    const wrapper = screen.getByTestId('wrapper');

    expect(wrapper).toHaveAttribute('href', '/biology');
  });
});
