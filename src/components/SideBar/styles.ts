import styled from 'styled-components';
import colors from '../../styles/colors';
import Drawer from '@material-ui/core/Drawer';

export const StyledTitle = styled.div`
  margin: 0 3rem;
  color: ${colors.primaryColor};
  font-size: 18px;
  cursor: pointer;
`;

export const StyledDrawer = styled(Drawer)`
  ul:hover {
    color: ${colors.primaryColor};
    svg {
      color: ${colors.primaryColor};
    }
  }
`;
