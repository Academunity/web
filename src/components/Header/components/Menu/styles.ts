import styled, { css, DefaultTheme } from 'styled-components';

export const Wrapper = styled.menu`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;

    gap: ${theme.spacings.xsmall};
  `}
`;

type NavItemProps = {
  active?: boolean;
};

const navItemModifiers = {
  active: (theme: DefaultTheme) => css`
    color: ${theme.colors.text};
    font-weight: bold;
  `,
};

export const NavItem = styled.a<NavItemProps>`
  ${({ theme, active }) => css`
    font-size: ${theme.font.sizes.medium};
    text-transform: uppercase;
    text-decoration: none;

    color: ${theme.colors.textGrayLighter};

    ${active && navItemModifiers.active(theme)};
  `}
`;
