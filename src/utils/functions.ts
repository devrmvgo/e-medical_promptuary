import { PatientData, PatientInterface, PatientDB } from '../utils/interfaces';

export const generateDetailsPatient = (patient: PatientData): string => {
  const gender = patient.gender == 'Masculino' ? 'Homem' : 'Mulher';

  return `${gender}, nascido(a) em ${patient.birthDate}, documento nº ${patient.cpfNumber}`;
};

/*
  FORMATA ITEMS DA LISTA DE PACIENTES VINDA DO BANCO PARA INTERFACE 
  DE EXIBIÇÃO EM PÁGINAS E COMPONENTES DE LISTA DE PACIENTES
*/
export const prepareDataListPatients = (
  patients: PatientDB[],
): PatientInterface[] => {
  const patientsData: PatientInterface[] = [];

  patients.map((item) => {
    const i: PatientInterface = {
      id: item.patient_id,
      name: item.patient_data.name,
      description: generateDetailsPatient(item.patient_data),
      clinicalCondition: item.patient_data.illnesses
        ? {
            have: true,
            message: 'Comordidades/doenças registradas em prontuário',
          }
        : {
            have: false,
            message: 'Sem doenças ou comordidades (Quadro de saúde estável)',
          },
    };

    patientsData.push(i);
  });

  console.log(patientsData);

  return patientsData;
};
