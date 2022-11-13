import React from "react";
import { DesktopView, MobileView, TabletView } from "../../HOC/Reponsive";
import HeaderHeaderDeskTop from "./HeaderHeaderDeskTop";
import HeaderHeaderMobile from "./HeaderHeaderMobile";
import HeaderHeaderTablet from "./HeaderHeaderTablet";

export default function Header() {
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
