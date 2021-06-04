import { PatientInterface, PatientData } from '../utils/interfaces';
import { getRequest, postRequest } from '../services/requests';
import { prepareDataListPatients } from '../utils/functions';

export const getList = async (): Promise<PatientInterface[] | void> => {
  const response = await getRequest('/patients');

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
