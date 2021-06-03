import React, { useState, useEffect } from 'react';
import { StyledContentPatientList } from './styles';
import List from '../../components/List';
import { getPatients } from '../../services/requests';

// interface Patient {
//   id: string;
// }

const Home: React.FC = () => {
  const patientsData = [
    {
      id: 'dff',
      name: 'Felipe',
      description: '22 Anos, Homem, Saudável',
      clinicalCondition:
        'Sem doenças ou comordidades (Quadro de saúde estável)',
    },
    {
      id: 'dff',
      name: 'Felipe',
      description: '22 Anos, Homem, Saudável',
      clinicalCondition:
        'Sem doenças ou comordidades (Quadro de saúde estável)',
    },
    {
      id: 'dff',
      name: 'Felipe',
      description: '22 Anos, Homem, Saudável',
      clinicalCondition:
        'Sem doenças ou comordidades (Quadro de saúde estável)',
    },
    {
      id: 'dff',
      name: 'Felipe',
      description: '22 Anos, Homem, Saudável',
      clinicalCondition:
        'Sem doenças ou comordidades (Quadro de saúde estável)',
    },
  ];

  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const list = getPatients('/patients');
    setPatients(list.data);
    console.log(list);
  }, []);

  return (
    <StyledContentPatientList>
      <h2>Lista de pacientes</h2>
      <List items={patientsData} />
    </StyledContentPatientList>
  );
};

export default Home;
