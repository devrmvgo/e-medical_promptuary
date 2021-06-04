/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

export const urlServer =
  'https://fsjlfic2n0.execute-api.us-east-2.amazonaws.com/emedicalpromptuary';

type Response = {
  data?: any;
  error?: boolean;
};

export const getRequest = async (
  path: string,
  url: string = urlServer,
): Promise<Response> => {
  return await axios
    .get(`${url}${path}`)
    .then((response) => {
      return { data: response.data.Items };
    })
    .catch((error) => {
      return { error };
    });
};

export const postRequest = async (
  path: string,
  data: any,
  url: string = urlServer,
): Promise<Response> => {
  return await axios
    .post(`${url}${path}`, data)
    .then((response) => {
      return { data: response.data };
    })
    .catch((error) => {
      return { error };
    });
};
