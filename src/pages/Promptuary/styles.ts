import styled from 'styled-components';
import colors from '../../styles/colors';
import Avatar from '@material-ui/core/Avatar';

export const StyledPromptuary = styled.div`
  height: 100%;
  padding: 2rem 4rem;

  .loading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;

    svg {
      color: ${colors.primaryColor};
    }
  }
`;

export const StyledSelectPatient = styled.ul`
  margin: 2rem auto;
  text-align: center;
  width: 500px;
  height: 400px;

  overflow: scroll;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background: #dad7d7;
  }
`;

export const StyledSelectOptionPatient = styled.li`
  list-style-type: none;
  padding: 0.5rem 0;
  &:hover {
    background: ${colors.grayLighter};
    cursor: pointer;
  }
`;

export const StyledContentPromptuary = styled.div`
  height: 650px;
  overflow: scroll !important;

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background: #dad7d7;
  }
`;

export const StyledContentInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;

  div {
    display: flex;
    flex-direction: column;
    span {
      margin: 0.5rem 0;
    }
  }

  margin: 1rem 0;
`;

export const StyledAvatar = styled(Avatar)`
  height: 130px;
  width: 130px;
  font-size: 50px;

  margin: auto 0;
`;
