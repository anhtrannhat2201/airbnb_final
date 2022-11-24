import { https } from "./configURL";

export const userServ = {
  userInfor: (id) => {
    let uri = `/api/users/${id}`;
    return https.get(uri);
  },
  postLogin: (data) => {
    let uri = `/api/auth/signin`;
    return https.post(uri, data);
  },
  postSignup: (data) => {
    let uri = `/api/auth/signup`;
    return https.post(uri, data);
  },
  upLoadAvatarUser: (formData) => {
    let uri = `/api/users/upload-avatar`;
    return https.post(uri, formData);
  },
  updateUser: (id) => {
    let uri = `/api/users/${id}`;
    return https.put(uri);
  },
  getUser: () => {
    let uri = `/api/users`;
    return https.get(uri);
  },
  searchUser: (name) => {
    let uri = `/api/users/search/${name}`;
    return https.get(uri);
  },
  // deleteUser: (id) => {
  //   let uri = `/api/users?id=${id}`
  //   return https.delete(uri)
  // },
  deleteUser: (taiKhoan) => {
    return https.delete(`/api/users?id=${taiKhoan}`);
  },
};
