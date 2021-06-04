import styled from 'styled-components';
import colors from '../../styles/colors';

export const StyledContentPatientList = styled.div`
  height: 100%;
  padding: 1rem;
  background: ${colors.grayLighter};
  display: flex;
  flex-direction: column;
  align-items: center;

  .loading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80%;
  }

  h2 {
    color: ${colors.gray};
  }
`;
