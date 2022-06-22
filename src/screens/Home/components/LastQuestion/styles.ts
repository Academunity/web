import { Card } from 'components/Card';
import styled, { css } from 'styled-components';

export const Wrapper = styled(Card)`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    padding: ${theme.spacings.xsmall};
    gap: ${theme.spacings.xxlarge};
  `}
`;

export const MainInfoWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

export const Title = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.text};
    font-weight: ${theme.font.bold};
  `}
`;
