import { https } from "./configURL";

export const authAPI = {
  login: (values) => {
    let uri = `/api/auth/signin`;
    return https.post(uri, values);
  },
  signUpUser: (values) => {
    let uri = `/api/auth/signup`;
    return https.post(uri, values);
  },
};
