import styled from 'styled-components';
import colors from '../../styles/colors';

export const StyledContentPatientList = styled.div`
  height: 100%;
  padding: 1rem;
  background: ${colors.grayLighter};
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: ${colors.gray};
  }
`;
