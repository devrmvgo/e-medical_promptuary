import React from 'react';

import { StyledListPatientsContent } from './styles';

import Table from '../Table';

interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: 'id', label: 'ISO\u00a0Code', minWidth: 100 },
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'fd', label: 'ISO\u00a0Code', minWidth: 100 },
];

const PatientList: React.FC = () => {
  return (
    <StyledListPatientsContent>
      <h2>Lista de pacientes</h2>
      <div className="container">
        <Table columns={columns} items={[{ id: 'dff', name: 'Felipe' }]} />
      </div>
    </StyledListPatientsContent>
  );
};

export default PatientList;
