import styled, { css } from 'styled-components';
import { Card as GlobalCard } from 'components/Card';

export const Container = styled.main`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled(GlobalCard)`
  width: 50rem;
`;

export const Form = styled.form`
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
