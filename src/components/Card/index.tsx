import styled, { css } from 'styled-components';

export const Card = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondary};

    border-radius: ${theme.border.radius.small};
    border: ${theme.border.widths.thin} solid ${theme.colors.secondary};

    text-decoration: none;

    transition: border-color ${theme.transition.fast},
      transform ${theme.transition.fast};

    &:is(a):hover {
      border-color: ${theme.colors.primary};
      transform: translateY(-3px);
    }
  `}
`;
