/* eslint-disable @typescript-eslint/no-explicit-any */

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

//TODOS OS DADOS QUE SERÃO ARMAZENADOS DE PACIENTE
export interface PatientData {
  id?: string;
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
  medications?: any;
  illnesses?: any;
  clinicalConsultations?: any;
}

//DADOS DE PACIENTE QUE VIRÃO DO BANCO DE DADOS
export interface PatientDB {
  patient_id: string;
  patient_data: PatientData;
}
