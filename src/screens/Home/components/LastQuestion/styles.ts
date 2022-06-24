import { Card } from 'components/Card';
import styled, { css } from 'styled-components';

export const Wrapper = styled(Card)`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    align-items: center;
    padding: ${theme.spacings.xsmall};
    gap: ${theme.spacings.medium};
  `}
`;

export const MainInfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

type TextProps = {
  numberOfLines?: number;
};

const textModifiers = {
  withNumberOfLines: (numberOfLines: number) => css`
    display: inline-box;
    line-clamp: ${numberOfLines};
    -webkit-line-clamp: ${numberOfLines};
    box-orient: vertical;
    -webkit-box-orient: vertical;
    overflow: hidden;
    white-space: normal;
  `,
};

export const Text = styled.span<TextProps>`
  ${({ theme, numberOfLines }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.text};
    font-weight: ${theme.font.bold};

    text-decoration: none;
    white-space: nowrap;

    transition: color ${theme.transition.default};

    ${!!numberOfLines && textModifiers.withNumberOfLines(numberOfLines)};

    &:is(a):hover {
      color: ${theme.colors.textGrayLight};
    }
  `}
`;

export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xsmall};

    text-decoration: none;

    &:is(a):hover {
      ${Text} {
        color: ${theme.colors.textGrayLight};
      }
    }
  `}
`;

export const Dismiss = styled.div`
  margin-left: auto;
  cursor: pointer;
`;
