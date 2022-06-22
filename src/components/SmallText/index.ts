import styled, { css } from 'styled-components';

export const SmallText = styled.small`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxxsmall};
    color: ${theme.colors.textGrayLighter};
    text-transform: uppercase;
    letter-spacing: 1px;
  `}
`;
