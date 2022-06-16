import { render, screen } from 'utils/tests';
import { Auth } from '.';

const props = {
  title: 'Sign in',
  children: <input type="text" />,
};

jest.mock('templates/Auth/components/Brand', () => ({
  __esModule: true,
  Brand: () => <div data-testid="Brand" />,
}));

jest.mock('templates/Auth/components/Content', () => ({
  __esModule: true,
  Content: () => <div data-testid="Content" />,
}));

describe('<Auth />', () => {
  it('should render the brand and content sections', () => {
    render(<Auth {...props} />);

    expect(screen.getByTestId('Brand')).toBeInTheDocument();
    expect(screen.getByTestId('Content')).toBeInTheDocument();
  });
});
