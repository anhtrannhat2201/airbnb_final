import React from "react";
import Footer from "../../Components/Footer/Footer";
import Filter from "../../Components/Filter/Filter";

import RoomList from "../../Components/RoomList/RoomList";
import { TabTitle } from "../../Utils/generalFunction";

export default function HomePage() {
  TabTitle("Nhà nghỉ dưỡng & Căn hộ cao cấp cho thuê - Airbnb");

  return (
    <div>
      <Filter />
      <RoomList />
      <Footer />
    </div>
  );
}
