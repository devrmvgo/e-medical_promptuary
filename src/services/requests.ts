/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

export const urlServer =
  'https://ukd9v1zn4i.execute-api.us-east-2.amazonaws.com/emedicalpromptuary';

type Response = {
  data?: any;
  error?: boolean;
};

export const getAllRequest = async (
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

export const getOneRequest = async (
  path: string,
  url: string = urlServer,
): Promise<Response> => {
  return await axios
    .get(`${url}${path}`)
    .then((response) => {
      return { data: response.data.Item };
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

export const putRequest = async (
  path: string,
  data: any,
  url: string = urlServer,
): Promise<Response> => {
  console.log(`${url}${path}`, data);
  return await axios
    .put(`${url}${path}`, data)
    .then((response) => {
      return { data: response.data };
    })
    .catch((error) => {
      return { error };
    });
};

export const deleteRequest = async (
  path: string,
  url: string = urlServer,
): Promise<Response> => {
  return await axios
    .delete(`${url}${path}`)
    .then((response) => {
      return { data: response };
    })
    .catch((error) => {
      return { error };
    });
};
