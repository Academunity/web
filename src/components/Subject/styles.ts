import styled, { css } from 'styled-components';
import { SubjectProps } from '.';

type WrapperProps = Pick<SubjectProps, 'color'>;

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, color }) => css`
    width: auto;
    min-height: 5rem;

    background: ${theme.colors.secondary};

    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid ${color};
    border-radius: ${theme.border.radius.small};

    text-decoration: none;

    transition: all ${theme.transition.default};

    &:hover {
      background: ${color};

      ${Content} {
        color: ${theme.colors.secondary};
      }
    }

    ${Content} {
      color: ${color};
    }
  `}
`;

export const Content = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};

    padding: 0 ${theme.spacings.xxsmall};
  `}
`;
