import styled, { css } from 'styled-components';

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const NavItem = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    color: ${theme.colors.textLight};
    font-size: ${theme.font.sizes.large};
    text-transform: uppercase;
    text-decoration: none;
  `}
`;

export const CurrentPage = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.font.sizes.large};
    text-transform: uppercase;
    font-weight: bold;
  `}
`;
