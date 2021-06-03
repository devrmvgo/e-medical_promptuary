import React from 'react';

import { StyledListPatientsContent } from './styles';

import List from '../List';

const PatientList: React.FC = () => {
  return (
    <StyledListPatientsContent>
      <h2>Lista de pacientes</h2>
      <div className="container">
        <List items={[{ id: 'dff', name: 'Felipe' }]} />
      </div>
    </StyledListPatientsContent>
  );
};

export default PatientList;
