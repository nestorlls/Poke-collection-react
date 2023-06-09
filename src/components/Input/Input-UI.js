import styled from '@emotion/styled';
import { colors } from '../../styles/Colors';
import { typography } from '../../styles/typography';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  label.label-input {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    ${typography.regular[12]}
  }

  input.input {
    width: 100%;
    align-items: center;
    padding: 8px;
    border: none;
    border-radius: 16px;
    ${typography.regular[14]}

    ::placeholder {
      color: ${colors.gray.medium};
    }

    :focus {
      outline: none;
      border: 1px solid ${colors.gray.light}
    }
  }
`;

export default InputWrapper;
