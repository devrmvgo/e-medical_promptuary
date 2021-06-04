import React, { useState } from 'react';
import {
  StyledContentPatientRegister,
  StyledForm,
  StyledButton,
} from './styles';

import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import { PatientData } from '../../utils/interfaces';

import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

import { create } from '../../models/patient';
import TitlePage from '../../components/TitlePage';
const Alert = (props: AlertProps) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

interface AlerInterface {
  message?: string;
  show: boolean;
  type: 'success' | 'error';
}

const Home: React.FC = () => {
  const [openAlert, setOpenAlert] = useState<AlerInterface>({
    show: false,
    type: 'success',
  });

  const patientForm: PatientData = {
    id: '',
    name: '',
    cpfNumber: '',
    birthDate: '',
    gender: '',
    job: '',
    address: '',
    email: '',
    phone: '',
    weight: '',
    heigth: '',
    bloodType: '',
    medications: [],
    illnesses: [],
    clinicalConsultations: [],
  };

  const [patient, setPatient] = useState<PatientData>(patientForm);

  const register = async () => {
    if (
      !patient.name ||
      !patient.cpfNumber ||
      !patient.birthDate ||
      !patient.gender
    ) {
      setOpenAlert({
        message: 'Preencha todos os campos obrigatórios (*)',
        show: true,
        type: 'error',
      });
    } else {
      const patienCreated = await create(patient);

      if (patienCreated) {
        setPatient({
          name: '',
          cpfNumber: '',
          birthDate: '',
          gender: '',
        });

        setOpenAlert({
          message: 'Paciente salvo com sucesso',
          show: true,
          type: 'success',
        });
      } else {
        setOpenAlert({
          message: 'Falha ao salvar paciente',
          show: true,
          type: 'error',
        });
      }
    }
  };

  return (
    <StyledContentPatientRegister>
      <TitlePage>Registro de Paciente</TitlePage>

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

      <StyledForm>
        <TextField
          label="Nome"
          style={{ margin: 5 }}
          required
          placeholder="Nome do Paciente"
          fullWidth
          margin="normal"
          value={patient.name}
          onChange={(e) => setPatient({ ...patient, name: e.target.value })}
        />
        <TextField
          label="CPF"
          required
          style={{ margin: 5 }}
          placeholder="CPF do Paciente"
          value={patient.cpfNumber}
          onChange={(e) =>
            setPatient({ ...patient, cpfNumber: e.target.value })
          }
        />
        <TextField
          label="Data de Nascimento"
          required
          style={{ margin: 5 }}
          placeholder="Data de Nascimento do Paciente"
          value={patient.birthDate}
          onChange={(e) =>
            setPatient({ ...patient, birthDate: e.target.value })
          }
        />
        <TextField
          label="Gênero"
          required
          style={{ margin: 5 }}
          placeholder="Gênero do Paciente"
          value={patient.gender}
          onChange={(e) => setPatient({ ...patient, gender: e.target.value })}
        />
        <TextField
          label="Telefone"
          style={{ margin: 5 }}
          placeholder="Telefone do Paciente"
          value={patient.phone}
          onChange={(e) => setPatient({ ...patient, phone: e.target.value })}
        />
        <TextField
          label="Trabalho"
          style={{ margin: 5 }}
          placeholder="Trabalho do Paciente"
          value={patient.job}
          onChange={(e) => setPatient({ ...patient, job: e.target.value })}
        />
        <TextField
          label="Peso"
          style={{ margin: 5 }}
          placeholder="Peso do Paciente"
          value={patient.weight}
          onChange={(e) => setPatient({ ...patient, weight: e.target.value })}
        />
        <TextField
          label="Altura"
          style={{ margin: 5 }}
          placeholder="Altura do Paciente"
          value={patient.heigth}
          onChange={(e) => setPatient({ ...patient, heigth: e.target.value })}
        />
        <TextField
          label="Tipo Sanguíneo"
          style={{ margin: 5 }}
          placeholder="Tipo Sanguíneo do Paciente"
          value={patient.bloodType}
          onChange={(e) =>
            setPatient({ ...patient, bloodType: e.target.value })
          }
        />
        <TextField
          label="Endereço"
          style={{ margin: 5 }}
          placeholder="Endereço do Paciente"
          fullWidth
          margin="normal"
          value={patient.address}
          onChange={(e) => setPatient({ ...patient, address: e.target.value })}
        />
      </StyledForm>

      <div className="action">
        <div>
          Após cadastrar o paciente você poderá controlar o seu prontuário. O
          mesmo é composto por registro de Doenças/Comorbidades, Consultas e
          Medicações.
        </div>
        <div>
          <StyledButton onClick={() => register()}>
            Salvar Paciente
          </StyledButton>
        </div>
      </div>
    </StyledContentPatientRegister>
  );
};

export default Home;
