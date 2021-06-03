import styled from 'styled-components';
import colors from '../../styles/colors';

export const StyledAppBar = styled.div`
  display: grid;
  grid-template-columns: 4fr 2fr;
  height: 50px;
  padding: 0.3rem 2rem 0 2rem;

  background: ${colors.primaryColor} !important;
  color: ${colors.grayLighter} !important;
`;

export const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin: 0 10px;
  }
`;

export const StyledOptionsContent = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledOption = styled.div`
  margin: 0 10px;
  padding: 8px 10px;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    color: ${colors.primaryColor};
    background: ${colors.grayLighter};
  }
`;
