import styled from 'styled-components';
import List from '@material-ui/core/List';
import colors from '../../styles/colors';

export const StyledListPatientsContent = styled(List)`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: ${colors.gray};
  }

  .container {
    height: 480px;
    min-width: 40rem;
    max-width: 70rem;
  }
`;

export const StyledList = styled(List)`
  height: 480px;
  width: 70rem;
`;
