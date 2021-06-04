import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import { StyledContentPatientList } from './styles';
import List from '../../components/List';
import { getList, remove } from '../../models/patient';
import { PatientInterface } from '../../utils/interfaces';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';

const Alert = (props: AlertProps) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

interface AlerInterface {
  message?: string;
  show: boolean;
  type: 'success' | 'error';
}

import TitlePage from '../../components/TitlePage';

const Home: React.FC = () => {
  const [patients, setPatients] = useState<PatientInterface[]>([]);
  const [load, setLoad] = useState(true);

  const [openAlert, setOpenAlert] = useState<AlerInterface>({
    show: false,
    type: 'success',
  });

  const history = useHistory();

  const actions = {
    edit: (patient: PatientInterface) => {
      console.log('editar: ', patient);
      history.push(`/patients/register/${patient.id}`);
    },
    see: (patient: PatientInterface) => {
      console.log('ver: ', patient);
      history.push(`/patients/promptuary/${patient.id}`);
    },
    delete: async (patient: PatientInterface) => {
      const patientDeleted = await remove(patient.id);

      if (patientDeleted) {
        setOpenAlert({
          message: 'Paciente apagado com sucesso',
          show: true,
          type: 'success',
        });

        setList();
      } else {
        setOpenAlert({
          message: 'Falha ao apagar Paciente',
          show: true,
          type: 'error',
        });
      }
    },
  };

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
        <Snackbar
          open={openAlert.show}
          autoHideDuration={3}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert
            severity={openAlert.type}
            onClose={() => setOpenAlert({ ...openAlert, show: false })}
          >
            {openAlert.message}
          </Alert>
        </Snackbar>

        <TitlePage>Lista de pacientes</TitlePage>
        <List items={patients} actions={actions} />
      </StyledContentPatientList>
    );
  }
};

export default Home;
