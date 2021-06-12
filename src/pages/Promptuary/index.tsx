import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {
  StyledPromptuary,
  StyledContentPromptuary,
  StyledContentInfo,
  StyledAvatar,
  StyledSelectPatient,
  StyledSelectOptionPatient,
} from './styles';

//GENERAL COMPONENTS
import TitlePage from '../../components/TitlePage';
import ListTopic from '../../components/ListTopic';
import { PatientData, PatientInterface } from '../../utils/interfaces';
import Divider from '@material-ui/core/Divider';

import CircularProgress from '@material-ui/core/CircularProgress';
import ModalForm from '../../components/ModalForm';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';
import { getOne, getList, update } from '../../models/patient';

interface AlerInterface {
  message?: string;
  show: boolean;
  type: 'success' | 'error';
}

interface Params {
  idPatient?: string;
}

const Alert = (props: AlertProps) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const Promptuary: React.FC = (): JSX.Element => {
  const params: Params = useParams();
  const history = useHistory();
  const [load, setLoad] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [form, setForm] = useState<any>({});
  const [openAlert, setOpenAlert] = useState<AlerInterface>({
    show: false,
    type: 'success',
  });

  const [patient, setPatient] = useState<PatientData>({
    name: '',
    cpfNumber: '',
    birthDate: '',
    gender: '',
  });

  const [patients, setPatients] = useState<PatientInterface[]>([]);

  const setList = async () => {
    const list = await getList();

    if (list) {
      setPatients(list);
    } else {
      console.error('Falha ao carregar listagem de pacientes');
    }

    setLoad(false);
  };

  const getPatient = async (patientId: string) => {
    const getPatient = await getOne(patientId);

    if (getPatient) {
      setPatient({ id: getPatient.patient_id, ...getPatient.patient_data });
    } else {
      console.error('Falha ao carregar paciente');
    }
  };

  const updatePatient = async () => {
    let patientUpdated;

    if (patient.id) {
      patientUpdated = await update(patient.id, patient);
    }

    if (patientUpdated) {
      setOpenAlert({
        message: 'Paciente atualizado com sucesso',
        show: true,
        type: 'success',
      });
    } else {
      setOpenAlert({
        message: 'Falha ao atualizar paciente',
        show: true,
        type: 'error',
      });
    }
  };

  useEffect(() => {
    if (params.idPatient) {
      getPatient(params.idPatient);
    }

    setList();
  }, []);

  useEffect(() => {
    if (!patient.medications) setPatient({ ...patient, medications: [] });
    if (!patient.illnesses) setPatient({ ...patient, illnesses: [] });
    if (!patient.clinicalConsultations)
      setPatient({ ...patient, clinicalConsultations: [] });
  }, [patient]);

  if (load) {
    return (
      <StyledPromptuary>
        <div className="loading">
          <CircularProgress />
        </div>
      </StyledPromptuary>
    );
  } else if (!params.idPatient) {
    return (
      <StyledPromptuary>
        <TitlePage>Prontuário do Paciente</TitlePage>
        <span>
          Selecione o respectivo paciente que deseja ver o prontuário:
        </span>

        <StyledSelectPatient>
          {patients.map((item, index) => (
            <StyledSelectOptionPatient
              key={index}
              onClick={() => {
                history.push(`/patients/promptuary/${item.id}`);
                history.go(0);
              }}
            >
              {item.name}
            </StyledSelectOptionPatient>
          ))}
        </StyledSelectPatient>
      </StyledPromptuary>
    );
  }

  return (
    <StyledPromptuary>
      <StyledContentPromptuary>
        <TitlePage>Prontuário do Paciente</TitlePage>

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

        <StyledContentInfo>
          <div>
            <StyledAvatar alt={patient.name} src="./avatar" />
          </div>
          <div>
            <span>{patient.name}</span>
            <span>
              Documento número {patient.cpfNumber}, nascido(a) em{' '}
              {patient.birthDate}, gênero {patient.gender}
            </span>
            <span>
              Tipo Sangúineo {patient.bloodType || 'não cadastrado'}, peso{' '}
              {patient.weight || 'não cadastrado'}, altura{' '}
              {patient.heigth || 'não cadastrado'}
            </span>
            <span>
              Telefone {patient.phone || 'não cadastrado'}, endereço{' '}
              {patient.address || 'não cadastrado'}
            </span>
          </div>
          <button
            onClick={() => {
              updatePatient();
            }}
          >
            Salvar Paciente
          </button>
        </StyledContentInfo>
        <Divider />

        <span>Medicações</span>
        <ListTopic
          items={patient.medications || []}
          columns={['name', 'effect', 'date']}
        />
        <ModalForm
          submit={() => {
            patient.medications?.push(form);
            setForm({});
          }}
          cancel={() => {
            setForm({});
          }}
        >
          <div>
            <TextField
              label="Nome do Remédio"
              style={{ margin: 5 }}
              placeholder="Nome do Remédio"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <TextField
              label="Efeito do Remédio"
              style={{ margin: 5 }}
              placeholder="Efeito do Remédio"
              onChange={(e) => setForm({ ...form, effect: e.target.value })}
            />
            <TextField
              label="Data da Medicação"
              style={{ margin: 5 }}
              placeholder="Data da Medicação"
              onChange={(e) => setForm({ ...form, date: e.target.value })}
            />
          </div>
        </ModalForm>
        <Divider />

        <span>Comordidades/Doenças</span>
        <ListTopic
          items={patient.illnesses || []}
          columns={['name', 'diagnosticDate', 'treatmentType']}
        />
        <ModalForm
          submit={() => {
            patient.illnesses?.push(form);
            setForm({});
          }}
          cancel={() => {
            setForm({});
          }}
        >
          <div>
            <TextField
              label="Nome da Doença"
              style={{ margin: 5 }}
              placeholder="Nome da Doença"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <TextField
              label="Data do Diagnóstico"
              style={{ margin: 5 }}
              placeholder="Data do Diagnóstico"
              onChange={(e) =>
                setForm({ ...form, diagnosticDate: e.target.value })
              }
            />
            <TextField
              label="Tipo de Tratamento"
              style={{ margin: 5 }}
              placeholder="Tipo de Tratamento"
              onChange={(e) =>
                setForm({ ...form, treatmentType: e.target.value })
              }
            />
          </div>
        </ModalForm>
        <Divider />

        <span>Consultas</span>
        <ListTopic
          items={patient.clinicalConsultations || []}
          columns={['type', 'date', 'diagnostic']}
        />
        <ModalForm
          submit={() => {
            patient.clinicalConsultations?.push(form);
            setForm({});
          }}
          cancel={() => {
            setForm({});
          }}
        >
          <div>
            <TextField
              label="Tipo da Consulta"
              style={{ margin: 5 }}
              placeholder="Tipo da Consulta"
              onChange={(e) => setForm({ ...form, type: e.target.value })}
            />
            <TextField
              label="Data da Consulta"
              style={{ margin: 5 }}
              placeholder="Data da Consulta"
              onChange={(e) => setForm({ ...form, date: e.target.value })}
            />
            <TextField
              label="Diagnóstico da Consulta"
              style={{ margin: 5 }}
              placeholder="Diagnóstico da Consulta"
              onChange={(e) => setForm({ ...form, diagnostic: e.target.value })}
            />
          </div>
        </ModalForm>
        <Divider />
      </StyledContentPromptuary>
    </StyledPromptuary>
  );
};

export default Promptuary;
