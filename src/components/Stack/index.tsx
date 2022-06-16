import * as CSS from 'csstype';
import * as S from './styles';

export type StackProps = {
  align?: CSS.Property.AlignItems;
  justify?: CSS.Property.JustifyContent;
  wrap?: CSS.Property.FlexWrap;
  spacing?: CSS.Property.Margin;
  direction?: CSS.Property.FlexDirection;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export function Stack({
  align,
  justify,
  wrap,
  spacing,
  direction: directionProp,
  children,
  ...props
}: StackProps) {
  const direction = directionProp ?? 'column';

  return (
    <S.Wrapper
      align={align}
      justify={justify}
      wrap={wrap}
      spacing={spacing}
      direction={direction}
      {...props}
    >
      {children}
    </S.Wrapper>
  );
}
