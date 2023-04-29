import styled from '@emotion/styled';
import { typography } from '../styles/typography';
import { colors } from '../styles/Colors';

const AuthWrapper = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  width: 100%;

  div.container {
    max-width: 810px;
    padding: 32px 2px;

    button {
      ${typography.bold[14]}
      max-width: 100px;
      height: 32px;
      border: none;
      border-radius: 50px;
      padding: 8px 16px;
      background-color: ${colors.gray.medium};
      color: ${colors.white};
      cursor: pointer;
      width: 100%;

      :hover {
        background-color: ${colors.stone[700]};
      }
    }
  }
`;

export default AuthWrapper;
