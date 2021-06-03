import axios from 'axios';

export const urlServer =
  'https://fsjlfic2n0.execute-api.us-east-2.amazonaws.com/emedicalpromptuary';

type Response = {
  data: any;
  error: boolean;
};

export const getPatients = (
  path: string,
  url: string = urlServer,
): Response => {
  const response = { data: {}, error: false };

  axios
    .get(`${url}${path}`)
    .then((res) => {
      response.data = res.data;
    })
    .catch((e) => {
      console.log(e);
      response.error = true;
    });

  return response;
};

// export const requestPost = (
//   path: string,
//   data: any,
//   url: string = urlServer,
// ): void => {
//   let response;

//   axios
//     .post(`${url}${path}`, data)
//     .then((res) => {
//       response = res.data;
//     })
//     .catch((e) => {
//       console.log(e);
//       response = null;
//     });

//   return response;
// };
