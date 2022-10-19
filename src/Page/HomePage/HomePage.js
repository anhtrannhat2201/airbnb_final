import React, { useEffect } from "react";

import RoomList from "../../Components/RoomList/RoomList";
import { TabTitle } from "../../Utils/generalFunction";

function HomePage() {
  TabTitle("Nhà nghỉ dưỡng & Căn hộ cao cấp cho thuê - Airbnb");

  return (
    <>
      <RoomList />
    </>
  );
}
export default HomePage;
