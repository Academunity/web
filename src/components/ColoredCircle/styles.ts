import { rgba } from 'polished';
import styled, { css } from 'styled-components';
import { ColoredCircleProps } from '.';

export type WrapperProps = Pick<ColoredCircleProps, 'color'>;

export const Wrapper = styled.div<WrapperProps>`
  ${({ color }) => css`
    width: 2rem;
    height: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;

    background: ${rgba(color, 0.1)};

    ${Circle} {
      background: ${color};
    }
  `}
`;

export const Circle = styled.div`
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
`;
