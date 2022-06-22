import { render } from 'utils/tests';

import { Card } from '.';

describe('<Card />', () => {
  it('should render correctly', () => {
    const { container } = render(<Card>This is the card content</Card>);

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        background: #201F2B;
        border-radius: 0.4rem;
        border: 2px solid #201F2B;
        -webkit-text-decoration: none;
        text-decoration: none;
        -webkit-transition: border-color 0.1s ease-in-out,-webkit-transform 0.1s ease-in-out;
        -webkit-transition: border-color 0.1s ease-in-out,transform 0.1s ease-in-out;
        transition: border-color 0.1s ease-in-out,transform 0.1s ease-in-out;
      }

      .c0:is(a):hover {
        border-color: #BA75FF;
        -webkit-transform: translateY(-3px);
        -ms-transform: translateY(-3px);
        transform: translateY(-3px);
      }

      <div
        class="c0"
      >
        This is the card content
      </div>
    `);
  });
});
