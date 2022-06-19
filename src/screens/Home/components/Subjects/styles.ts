import styled, { css } from 'styled-components';
import { Wrapper as SubjectWrapper } from 'components/Subject/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xsmall};
    color: ${theme.colors.text};

    ${SubjectWrapper} {
      flex: 1;
    }
  `}
`;
