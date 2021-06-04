import React, { useState, useEffect } from 'react';

import { StyledContentPatientList } from './styles';
import List from '../../components/List';
import { getList } from '../../models/patient';
import { PatientInterface } from '../../utils/interfaces';

import CircularProgress from '@material-ui/core/CircularProgress';

import TitlePage from '../../components/TitlePage';

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
  const [load, setLoad] = useState(true);

  const setList = async () => {
    const list = await getList();

    if (list) {
      setPatients(list);
    } else {
      console.error('Falha ao carregar listagem de pacientes');
    }

    setLoad(false);
  };

  useEffect(() => {
    setList();
  }, []);

  if (load) {
    return (
      <StyledContentPatientList>
        <div className="loading">
          <CircularProgress />
        </div>
      </StyledContentPatientList>
    );
  } else {
    return (
      <StyledContentPatientList>
        <TitlePage>Lista de pacientes</TitlePage>
        <List items={patients} actions={actions} />
      </StyledContentPatientList>
    );
  }
};

export default Home;
