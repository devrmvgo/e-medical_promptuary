import styled from 'styled-components';
import colors from '../../styles/colors';

export const StyledContentPatientList = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .modal {
    display: flex;
    padding: 1rem;
    alignitems: center;
    justifycontent: center;
  }

  .modalContent {
    width: 400;
    backgroundcolor: white;
    border: 2px solid #000;
    padding: 1rem;
    color: red !important;
  }

  .loading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80vh;

    svg {
      color: ${colors.primaryColor};
    }
  }

  h2 {
    color: ${colors.gray};
  }
`;
