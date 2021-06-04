import styled from 'styled-components';
import List from '@material-ui/core/List';
import colors from '../../styles/colors';

export const StyledList = styled(List)`
  height: 460px;
  width: 90%;
  text-align: center;

  .noItems {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80%;
    color: ${colors.primaryColor};
  }
  
  li:hover {
      background: ${colors.grayLighter};
    }
  }

  overflow: scroll;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background: #dad7d7;
  }
`;

export const StyledInputSearch = styled.div`
  width: 90%;
  margin-bottom: 1rem;
  background: ${colors.grayLighter};
  border: 0.5px solid ${colors.grayStronger};
  display: flex;

  svg {
    color: ${colors.gray};
    font-size: 28px;
    text-align: center;
    margin: 5px 12px;
  }

  input {
    width: 93%;
    height: 35px;
    border: 0;
    font-size: 15px;
    background: transparent;
    outline: 0;
  }
`;

export const StyledItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .description {
    margin: 3px 0;
    font-size: 12px;
  }

  .clinicalCondition {
    color: ${colors.primaryColor};
    font-size: 15px;
  }
`;

export const StyledItemActions = styled.div`
  display: flex;
  text-align: right;

  svg {
    color: ${colors.gray};
    margin: 0 5px;

    &:hover {
      cursor: pointer;
      color: ${colors.primaryColor};
    }
  }
`;
