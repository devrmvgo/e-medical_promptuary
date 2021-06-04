import styled from 'styled-components';
import colors from '../../styles/colors';

export const StyledContentPatientList = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .loading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80%;

    svg {
      color: ${colors.primaryColor};
    }
  }

  h2 {
    color: ${colors.gray};
  }
`;
