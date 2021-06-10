import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import colors from '../../styles/colors';

export const StyledButton = styled(Button)`
  margin: 1rem 0 2rem 1rem;
  padding: 5px 15px;
  border-radius: 3px;
  cursor: pointer;
  color: ${colors.white} !important;
  background: ${colors.primaryColor};

  &:hover {
    background: ${colors.boxShadow};
    color: ${colors.primaryColor}!important;
  }
`;

export const StyledAction = styled(Button)`
  margin: 1rem 0.5rem;
  padding: 5px 15px;
  border-radius: 3px;
  cursor: pointer;

  float: right;

  &.cancel {
    color: ${colors.white} !important;
    background: #e61919;

    &:hover {
      background: ${colors.boxShadow};
      color: #e61919!important;
    }
  }

  &.submit {
    color: ${colors.white} !important;
    background: ${colors.primaryColor};

    &:hover {
      background: ${colors.boxShadow};
      color: ${colors.primaryColor}!important;
    }
  }
`;
