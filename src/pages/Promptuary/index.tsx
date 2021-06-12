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

import TextField from '@material-ui/core/TextField';
import { getOne, getList } from '../../models/patient';

interface Params {
  idPatient?: string;
}

const Promptuary: React.FC = () => {
  const params: Params = useParams();
  const history = useHistory();
  const [load, setLoad] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [form, setForm] = useState<any>({});
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
    const patient = await getOne(patientId);

    if (patient) {
      console.log(patient);
      setPatient({ id: patient.patient_id, ...patient.patient_data });
    } else {
      console.error('Falha ao carregar paciente');
    }
  };

  useEffect(() => {
    if (params.idPatient) {
      getPatient(params.idPatient);
    }

    setList();
  }, []);

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
              console.log(patient);
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

        {/* Medicações : {patient.medications}
      Comordidades/Doenças : {patient.illnesses} */}
        {/* "patient": {
          "cpfNumber": "125.854.845-95",
          "name": "Maria Pereira Souza",
          "birthDate": "23/02/1973",
          "gender": "Feminino",
          "job": "Agricultora",
          "address": "Rua Lágoa Nova, n 110, Av. Indepêndencia, Pau dos Ferros",
          "phone": "(84) 9 8808-5163",
          "weight": 91.2,
          "heigth": 1.63,
          "bloodType": "A+",
          "medications": [],
          "illnesses": [{"name": "hipertensão"}],
          "clinicalConsultations": []
        } */}
      </StyledContentPromptuary>
    </StyledPromptuary>
  );
};

export default Promptuary;
