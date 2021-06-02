import React from 'react';
import { StyledContentHome, StyledAppBar } from './styles';
import Button from '@material-ui/core/Button';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

const AppBar: React.FC = () => {
  return (
    <StyledContentHome>
      <StyledAppBar>
        <div className="titleMenu">
          <AssignmentIndIcon />
          <span>Prontuário Médico Eletrônico</span>
        </div>

        <div className="appOptions">
          <Button color="inherit">Pacientes</Button>
          <Button color="inherit">Promptuário</Button>
        </div>
      </StyledAppBar>
    </StyledContentHome>
  );
};

export default AppBar;
