import { render, screen } from 'utils/tests';

import { SmallText } from '.';

describe('<SmallText />', () => {
  it('should render correctly', () => {
    const { container } = render(<SmallText>Resume</SmallText>);

    expect(screen.getByText('Resume')).toBeInTheDocument();
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-size: .8rem;
        color: rgba(204,204,204,0.6);
        text-transform: uppercase;
        -webkit-letter-spacing: 1px;
        -moz-letter-spacing: 1px;
        -ms-letter-spacing: 1px;
        letter-spacing: 1px;
      }

      <small
        class="c0"
      >
        Resume
      </small>
    `);
  });
});
