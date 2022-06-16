import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    flex: 1;

    display: flex;
    flex-direction: column;

    padding-left: ${theme.spacings.xxlarge};
  `}
`;

export const Infos = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xhuge};
    color: ${theme.colors.text};
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    width: 75%;

    font-size: ${theme.font.sizes.xxxlarge};
    font-weight: ${theme.font.light};

    color: ${theme.colors.text};
  `}
`;

export const SocialLogos = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: ${theme.spacings.xsmall};
    margin-bottom: ${theme.spacings.small};
  `}
`;
