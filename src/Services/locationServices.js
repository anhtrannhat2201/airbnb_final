import { https } from "./configURL";

export const locationSrv = {
  getLocationId: (locationID) => {
    let uri = `/api/vi-tri/${locationID}`;
    return https.get(uri);
  },
};
