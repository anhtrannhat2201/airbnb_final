import { https } from "./configURL";

export const roomAPI = {
  getListRoom: () => {
    let uri = `/api/phong-thue`;
    return https.get(uri);
  },
};
