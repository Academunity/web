import styled, { css } from 'styled-components';
import { Card as GlobalCard } from 'components/Card';

export const Wrapper = styled.main`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled(GlobalCard)`
  width: 50rem;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium};
  `}
`;

export const FormTitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.text};
  `}
`;
