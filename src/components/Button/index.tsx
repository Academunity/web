import { forwardRef } from 'react';
import * as S from './styles';

type ButtonTypes =
  | React.AnchorHTMLAttributes<HTMLAnchorElement>
  | React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  minimal?: boolean;
  icon?: React.ReactNode;
  as?: React.ElementType;
} & ButtonTypes;

export const ButtonComponent: React.ForwardRefRenderFunction<
  S.WrapperProps,
  ButtonProps
> = (
  {
    children,
    icon,
    size = 'medium',
    minimal = false,
    fullWidth = false,
    ...props
  },
  ref,
) => (
  <S.Wrapper
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    minimal={minimal}
    ref={ref}
    {...props}
  >
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
);

export const Button = forwardRef(ButtonComponent);
