import React, { useState, useEffect } from 'react';

import { StyledContentPatientList } from './styles';
import List from '../../components/List';
import { getList } from '../../models/patient';
import { PatientInterface } from '../../utils/interfaces';

const actions = {
  edit: (patient: PatientInterface) => {
    console.log('editar: ', patient);
  },
  see: (patient: PatientInterface) => {
    console.log('ver: ', patient);
  },
  delete: (patient: PatientInterface) => {
    console.log('apagar: ', patient);
  },
};

const Home: React.FC = () => {
  const [patients, setPatients] = useState<PatientInterface[]>([]);

  const setList = async () => {
    const list = await getList();

    if (list) {
      setPatients(list);
    } else {
      console.error('Falha ao carregar listagem de pacientes');
    }
  };

  useEffect(() => {
    setList();
  }, []);

  return (
    <StyledContentPatientList>
      <h2>Lista de pacientes</h2>
      <List items={patients} actions={actions} />
    </StyledContentPatientList>
  );
};

export default Home;
