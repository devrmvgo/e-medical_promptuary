import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  StyledContentPromptuary,
  StyledContentInfo,
  StyledAvatar,
} from './styles';

//GENERAL COMPONENTS
import TitlePage from '../../components/TitlePage';
import ListTopic from '../../components/ListTopíc';
import { PatientData } from '../../utils/interfaces';
import Divider from '@material-ui/core/Divider';

import ModalForm from '../../components/ModalForm';

import { getOne } from '../../models/patient';

interface Params {
  idPatient?: string;
}

const Promptuary: React.FC = () => {
  const params: Params = useParams();
  const [patient, setPatient] = useState<PatientData>({
    name: '',
    cpfNumber: '',
    birthDate: '',
    gender: '',
  });

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
      console.log(patient);
    }
  }, []);

  if (!params.idPatient) {
    return (
      <StyledContentPromptuary>
        <TitlePage>Prontuário do Paciente</TitlePage>
        <span>
          Selecione o respectivo paciente que deseja ver o prontuário:
        </span>
      </StyledContentPromptuary>
    );
  }

  return (
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
        items={[{ name: 'Doença 1' }, { name: 'Doença 2' }]}
        columns={['name']}
      />
      <ModalForm
        submit={() => {
          console.log(patient);
        }}
      >
        <div>
          Formulário aqui dentro
          <input />
        </div>
      </ModalForm>
      <Divider />

      <span>Comordidades/Doenças</span>
      <ListTopic items={patient.illnesses || []} columns={['name', 'name']} />
      <Divider />

      <span>Consultas</span>
      <ListTopic
        items={patient.clinicalConsultations || []}
        columns={['name']}
      />
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
  );
};

export default Promptuary;
