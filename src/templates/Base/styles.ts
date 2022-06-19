import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxlarge};
  `}
`;
