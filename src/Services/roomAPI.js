import { https } from "./configURL";

export const roomAPI = {
  getListRoom: () => {
    let uri = `/api/phong-thue`;
    return https.get(uri);
  },
  getListRoomByLocation: (locationId) => {
    let uri = `/api/phong-thue/lay-phong-theo-vi-tri?maViTri=${locationId}`;
    return https.get(uri);
  },
  getRoomDetail: (roomId) => {
    let uri = `/api/phong-thue/${roomId}`;
    return https.get(uri);
  },
  getDatPhong: () => {
    let uri = `/api/dat-phong`;
    return https.get(uri);
  },
  getDatPhongId: (id) => {
    let uri = `/api/dat-phong/${id}`;
    return https.get(uri);
  },
  postDatPhong: (data) => {
    let uri = `/api/dat-phong`;
    return https.post(uri, data);
  },
  getReview: (maPhong) => {
    let uri = `/api/binh-luan/lay-binh-luan-theo-phong/${maPhong}`;
    return https.get(uri, maPhong);
  },
  postReview:(data) => { 
    let uri= `/api/binh-luan`
    return https.post(uri,data)
   } 
};
