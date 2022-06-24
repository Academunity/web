import { Card } from 'components/Card';
import styled, { css } from 'styled-components';

export const Wrapper = styled(Card)`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    white-space: nowrap;

    padding: 0 ${theme.spacings.large};

    span {
      color: ${theme.colors.text};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`;
