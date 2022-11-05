import React, { useEffect } from "react";
import { DesktopView, MobileView, TabletView } from "../../HOC/Reponsive";
import HeaderHeaderDeskTop from "./HeaderHeaderDeskTop";
import HeaderHeaderMobile from "./HeaderHeaderMobile";
import HeaderHeaderTablet from "./HeaderHeaderTablet";

import { getLocationIdAction } from "../../redux/actions/actionRoom";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const { roomDetail } = useSelector((state) => state.roomReducer);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLocationIdAction(roomDetail?.maViTri));
  }, []);

  return (
    <div className="h-20">
      <DesktopView>
        <HeaderHeaderDeskTop />
      </DesktopView>
      <TabletView>
        <HeaderHeaderTablet />
      </TabletView>
      <MobileView>
        <HeaderHeaderMobile />
      </MobileView>
    </div>
  );
}
