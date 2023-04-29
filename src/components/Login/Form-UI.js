import styled from '@emotion/styled';
import { colors } from '../../styles/Colors';
import { typography } from '../../styles/typography';

const FormWrapper = styled.div`
  max-width: 500px;
  padding: 0 6px;
  width: 100%;

  form.form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;

    button.submit {
      ${typography.bold[14]}
      max-width: 300px;
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

export default FormWrapper;
