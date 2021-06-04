import { PatientInterface } from '../utils/interfaces';
import { getRequest } from '../services/requests';
import { prepareDataListPatients } from '../utils/functions';

export const getList = async (): Promise<PatientInterface[] | void> => {
  const response = await getRequest('/patients');

  if (response.data) {
    return prepareDataListPatients(response.data);
  }
};
