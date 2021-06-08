import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

//STYLED COMPONENTS
import { StyledContentPatientList } from './styles';

//GENERAL COMPONENTS
import TitlePage from '../../components/TitlePage';
import List from '../../components/List';

//MATERIAL-UI COMPONENTS
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';

//REQUISIÇÕES
import { getList, remove } from '../../models/patient';
import { PatientInterface } from '../../utils/interfaces';

interface AlerInterface {
  message?: string;
  show: boolean;
  type: 'success' | 'error';
}

const Alert = (props: AlertProps) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const PatientList: React.FC = (): JSX.Element => {
  const history = useHistory();

  const [patients, setPatients] = useState<PatientInterface[]>([]);
  const [load, setLoad] = useState(true);

  const [openAlert, setOpenAlert] = useState<AlerInterface>({
    show: false,
    type: 'success',
  });

  const actions = {
    edit: (patient: PatientInterface) => {
      history.push(`/patients/register/${patient.id}`);
    },
    see: (patient: PatientInterface) => {
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

        <TitlePage>Lista de Pacientes</TitlePage>
        <List items={patients} actions={actions} />
      </StyledContentPatientList>
    );
  }
};

export default PatientList;
