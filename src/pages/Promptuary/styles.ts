import styled from 'styled-components';
import colors from '../../styles/colors';
import Avatar from '@material-ui/core/Avatar';

export const StyledPromptuary = styled.div`
  height: 100%;
  margin-left: 4rem;

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

  .subtitle {
    margin: 1rem 10px;
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
  grid-template-columns: 2fr 7fr;
  margin: 1rem 0;

  div {
    display: flex;
    flex-direction: column;

    span {
      margin: 5px 0;
      font-size: 15px;
    }
  }

  .spanInfo {
    width: 600px;
    margin: 2rem 0.5rem 1rem;
    font-size: 15px;
    color: ${colors.primaryColor};
  }

  button {
    margin: 2rem 0.5rem 1rem;
    cursor: pointer;
  }
`;

export const StyledButton = styled.button`
  margin: 0 30px;
  padding: 10px 15px;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  color: ${colors.white} !important;
  background: ${colors.primaryColor};
  font-size: 0.875rem;
  text-transform: uppercase;

  &:hover {
    background: ${colors.boxShadow};
    color: ${colors.primaryColor}!important;
  }
`;

export const StyledAvatar = styled(Avatar)`
  height: 110px;
  width: 110px;
  font-size: 50px;
  margin: auto;
`;
