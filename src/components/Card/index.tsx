import styled, { css } from 'styled-components';

export const Card = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondary};
    border-radius: ${theme.border.radius.small};
  `}
`;
