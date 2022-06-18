import { rgba } from 'polished';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
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
