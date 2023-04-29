import styled from '@emotion/styled';
import { typography } from '../../styles/typography';
import { colors } from '../../styles/Colors';

const SearchWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  a {
    text-decoration: none;
    text-align: end;
    color: ${colors.gray.medium};
    :hover {
      color: ${colors.pink[600]};
      text-decoration: underline;
    }
  }

  form.search {
    display: flex;
    align-items: center;
    gap: 16px;

    button.search {
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

  div.section-pokemon {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 32px 0;

    div.ready-search {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 16px;
    }
  }
`;

export default SearchWrapper;
