//INTERFACE PARA ESTADO CLÍNICO DE PACIENTE
export interface ClinicalConditionInterface {
  have: boolean;
  message: string;
}

//DADOS QUE VÃO SER EXIBIDOS EM PÁGINAS E COMPONENTES DE LISTA DE PACIENTES
export interface PatientInterface {
  id: string;
  name: string;
  description: string;
  clinicalCondition: ClinicalConditionInterface;
}

// "name": "Cleide Lima",
// "birth_date": "23/02/1973",
// "gender": "Feminino",
// "Job": "Agricultora",
// "address": "Rua Lágoa Nova, n 110, Av. Indepêndencia, Pau dos Ferros",
// "phone": "(84) 9 8808-5163",
// "weight": 91.2,
// "heigth": 1.63,
// "blood_type": "A+",
// "medications": [],
// "illnesses": [{"name": "hipertensão"}],
// "clinical_consultations": []

//TODOS OS DADOS QUE SERÃO ARMAZENADOS DE PACIENTE
export interface PatientData {
  cpfNumber: string;
  name: string;
  birthDate: string;
  gender: string;
  job?: string;
  address?: string;
  email?: string;
  phone?: string;
  weight?: string;
  heigth?: string;
  bloodType?: string;
  medications?: string;
  illnesses?: string;
  clinicalConsultations?: string;
}

//DADOS DE PACIENTE QUE VIRÃO DO BANCO DE DADOS
export interface PatientDB {
  patient_id: string;
  patient_data: PatientData;
}
