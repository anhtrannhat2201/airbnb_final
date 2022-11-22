import { https } from "./configURL";

export const locationSrv = {
  getListLocation: () => {
    let uri = `/api/vi-tri`;
    return https.get(uri);
  },
  getLocationId: (locationID) => {
    let uri = `/api/vi-tri/${locationID}`;
    return https.get(uri);
  },
  // getLocationName: (tenViTri = "") => {
  //   let uri = `/api/vi-tri/phan-trang-tim-kiem?pageIndex=1&pageSize=1&keyword=Qu%E1%BA%ADn%201`;
  //   return https.get(uri);
  // },
  postLocation: (values) => {
    let uri = `/api/vi-tri`;
    return https.post(uri, values);
  },
  // editImageLocation: (values) => {
  //   let uri = `/api/vi-tri/upload-hinh-vitri`;
  //   return https.post(uri, values);
  // },
  editImageLocation: (values) => {
    let uri = `/api/vi-tri/upload-hinh-vitri?maViTri=1365`;
    return https.post(uri, values);
  },
  deleteLocationId: (maViTri) => {
    let uri = `/api/vi-tri/${maViTri}`;
    return https.delete(uri);
  },
  updateLocationId: (values) => {
    let uri = `/api/vi-tri/${values?.id}`;
    return https.put(uri, values);
  },
};
