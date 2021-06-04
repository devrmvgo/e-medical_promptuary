import styled from 'styled-components';
import List from '@material-ui/core/List';
import colors from '../../styles/colors';

export const StyledList = styled(List)`
  height: 500px;
  width: 90%;
  text-align: center;

  .noItems {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80%;
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
