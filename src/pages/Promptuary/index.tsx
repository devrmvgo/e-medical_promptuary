import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { StyledContentPromptuary } from './styles';

import { PatientData } from '../../utils/interfaces';

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
      setPatient({ id: patient.patient_id, ...patient.patient_data });
    } else {
      console.error('Falha ao carregar listagem de pacientes');
    }
  };

  useEffect(() => {
    if (params.idPatient) {
      getPatient(params.idPatient);
      console.log(patient);
    }
  }, []);

  if (params.idPatient) {
    return (
      <StyledContentPromptuary>
        Prontuário: {params.idPatient}
      </StyledContentPromptuary>
    );
  } else {
    return (
      <StyledContentPromptuary>Prontuário selecione</StyledContentPromptuary>
    );
  }
};

export default Promptuary;
