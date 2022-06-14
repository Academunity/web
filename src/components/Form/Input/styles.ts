import styled, { css, DefaultTheme } from 'styled-components';
import { InputProps } from '.';

type WrapperProps = Pick<InputProps, 'disabled'> & { error: boolean };
type IconPositionProps = Pick<InputProps, 'iconPosition'>;
type ControlProps = IconPositionProps;

const wrapperModifiers = {
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Control},
    ${Icon} {
      cursor: not-allowed;
      color: ${theme.colors.gray};

      &::placeholder {
        color: currentColor;
      }
    }
  `,
  error: (theme: DefaultTheme) => css`
    ${ControlWrapper} {
      border-color: ${theme.colors.danger};
    }

    ${Icon},
    ${Label} {
      color: ${theme.colors.danger};
    }
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error, disabled }) => css`
    ${error && wrapperModifiers.error(theme)}
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`;

export const ControlWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.grayDarkest};
    padding: 0 ${theme.spacings.xsmall};

    border: ${theme.border.widths.thin} solid ${theme.colors.grayDarker};
    border-radius: ${theme.border.radius.small};

    transition: border-color ${theme.transition.default};

    &:focus-within {
      border-color: ${theme.colors.primary};
    }
  `}
`;

export const Control = styled.input<ControlProps>`
  ${({ theme, iconPosition }) => css`
    width: 100%;

    color: ${theme.colors.text};
    background: transparent;

    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};

    padding: ${theme.spacings.xsmall} 0;
    padding-${iconPosition}: ${theme.spacings.xsmall};

    border: 0;
    outline: none;
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.text};
    cursor: pointer;
  `}
`;

export const Icon = styled.div<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    width: 2.2rem;
    color: ${theme.colors.grayDark};
    order: ${iconPosition === 'right' ? 1 : 0};

    & > svg {
      width: 100%;
    }
  `}
`;

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.danger};
    font-size: ${theme.font.sizes.xsmall};
  `}
`;
