import { PatientInterface, PatientData } from '../utils/interfaces';
import {
  getAllRequest,
  postRequest,
  deleteRequest,
} from '../services/requests';
import { prepareDataListPatients } from '../utils/functions';

export const getList = async (): Promise<PatientInterface[] | void> => {
  const response = await getAllRequest('/patients');

  if (response.data) {
    return prepareDataListPatients(response.data);
  }
};

export const create = async (
  patient: PatientData,
): Promise<PatientData | void> => {
  const response = await postRequest('/patients', { patient: patient });

  if (response.data) {
    return response.data;
  }
};

export const remove = async (
  patiendId: string,
): Promise<PatientInterface[] | void> => {
  const response = await deleteRequest(`/patients/${patiendId}`);

  if (response.data) {
    return response.data;
  }
};
