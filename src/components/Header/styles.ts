import styled, { css } from 'styled-components';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 7rem;

    background: ${theme.colors.secondary};
    color: ${theme.colors.text};

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 ${theme.spacings.huge};

    border-top: 4px solid ${theme.colors.primary};

    position: relative;
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};

    color: ${theme.colors.primary};

    margin: 0;
  `}
`;

export const Profile = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xxxsmall};

    cursor: pointer;
  `}
`;

export const ProfilePicture = styled.div`
  ${({ theme }) => css`
    width: 3.2rem;
    height: 3.2rem;

    border: 1px solid ${theme.colors.primary};
    border-radius: 50%;

    background-image: url('https://github.com/doougui.png');
    background-size: cover;
  `}
`;
