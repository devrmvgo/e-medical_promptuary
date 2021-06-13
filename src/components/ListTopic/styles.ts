import styled from 'styled-components';
import List from '@material-ui/core/List';
import colors from '../../styles/colors';

export const StyledList = styled(List)`
  width: 90%;
  text-align: center;

  .noItems {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80%;
    color: ${colors.primaryColor};
  }

  li {
    display: flex;
    flex-direction: column;
  }

  li:hover {
    background: ${colors.grayLighter};
  }
`;
