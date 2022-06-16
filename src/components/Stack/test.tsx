import { render } from 'utils/tests';

import { Stack } from '.';

describe('<Stack />', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Stack>
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
      </Stack>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
