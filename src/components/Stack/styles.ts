import styled, { css } from 'styled-components';
import { StackProps } from '.';

type WrapperProps = StackProps;

export const Wrapper = styled.div<WrapperProps>`
  ${({ align, justify, wrap, spacing, direction }) => css`
    display: flex;
    flex-direction: ${direction};
    flex-wrap: ${wrap};
    align-items: ${align};
    justify-content: ${justify};
    gap: ${spacing};
  `}
`;
