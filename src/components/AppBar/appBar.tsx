import React from 'react';
import { useHistory } from 'react-router-dom';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import {
  StyledAppBar,
  StyledTitle,
  StyledOptionsContent,
  StyledOption,
} from './styles';

const AppBar: React.FC = () => {
  const history = useHistory();

  return (
    <StyledAppBar>
      <StyledTitle>
        <AssignmentIndIcon />
        <span>Prontuário Médico Eletrônico</span>
      </StyledTitle>

      <StyledOptionsContent>
        <StyledOption
          color="inherit"
          onClick={() => {
            history.push('/patients/register');
          }}
        >
          <span> Novo paciente</span>
        </StyledOption>

        <StyledOption
          color="inherit"
          onClick={() => {
            history.push('/patients');
          }}
        >
          Pacientes
        </StyledOption>

        <StyledOption
          color="inherit"
          onClick={() => {
            history.push('/patients/promptuary');
          }}
        >
          Prontuário
        </StyledOption>
      </StyledOptionsContent>
    </StyledAppBar>
  );
};

export default AppBar;
