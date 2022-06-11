import { render } from 'utils/tests';

import { Card } from '.';

describe('<Card />', () => {
  it('should render correctly', () => {
    const { container } = render(<Card>This is the card content</Card>);

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        background: #363449;
        border-radius: 0.4rem;
      }

      <div
        class="c0"
      >
        This is the card content
      </div>
    `);
  });
});
