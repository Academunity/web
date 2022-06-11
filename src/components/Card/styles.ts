import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondary};
    border-radius: ${theme.border.radius.small};
  `}
`;
