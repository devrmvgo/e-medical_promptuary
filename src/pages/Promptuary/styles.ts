import styled from 'styled-components';
// import colors from '../../styles/colors';
import Avatar from '@material-ui/core/Avatar';

export const StyledContentPromptuary = styled.div`
  height: 100%;
  padding: 1rem 4rem;
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
