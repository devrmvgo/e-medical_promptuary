import styled from 'styled-components';
import colors from '../../styles/colors';

export const StyledAppBar = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  height: 50px;
  padding: 0 1rem;
  background: ${colors.primaryColor} !important;
  color: ${colors.white} !important;

  div {
    display: flex;
    align-items: center;
  }

  .titleMenu {
    svg {
      margin: 0 10px;
    }
  }

  .appOptions {
    right: 0;
  }
`;

export const StyledAvatar = styled.img`
  width: 100px;
`;
