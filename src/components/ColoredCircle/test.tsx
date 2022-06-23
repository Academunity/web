import { render } from 'utils/tests';

import { ColoredCircle } from '.';

describe('<ColoredCircle />', () => {
  it('should render correctly', () => {
    const { container } = render(<ColoredCircle color="#FF4747" />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        width: 2rem;
        height: 2rem;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        border-radius: 50%;
        background: rgba(255,71,71,0.1);
      }

      .c0 .c1 {
        background: #FF4747;
      }

      .c2 {
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 50%;
      }

      <div
        class="c0"
        color="#FF4747"
      >
        <div
          class="c1 c2"
        />
      </div>
    `);
  });
});
