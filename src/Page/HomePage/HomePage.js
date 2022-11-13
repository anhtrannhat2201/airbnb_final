import React, { useEffect } from "react";
import Filter from "../../Components/Filter/Filter";

import RoomList from "../../Components/RoomList/RoomList";
import { TabTitle } from "../../Utils/generalFunction";

function HomePage() {
  TabTitle("Nhà nghỉ dưỡng & Căn hộ cao cấp cho thuê - Airbnb");

  return (
    <>
      <Filter />
      <RoomList />
    </>
  );
}
export default HomePage;
