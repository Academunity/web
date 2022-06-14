import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

export const Control = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    background: ${theme.colors.grayDarkest};

    border: ${theme.border.widths.thin} solid ${theme.colors.grayDarker};
    border-radius: ${theme.border.radius.small};

    padding: ${theme.spacings.xsmall};

    outline: none;

    transition: border-color ${theme.transition.default};

    &:focus {
      border-color: ${theme.colors.primary};
    }
  `}
`;
