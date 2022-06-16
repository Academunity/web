import { rgba } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    height: 100%;

    background-image: linear-gradient(
        105deg,
        ${rgba(theme.colors.mainBg, 0.7)} 50%,
        ${theme.colors.mainBg} 50%
      ),
      url(http://localhost:3000/img/banner.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    flex-direction: row;
  `}
`;

export const Content = styled.main`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
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
