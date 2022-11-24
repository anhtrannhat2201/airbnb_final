import React from "react";
import { useSelector } from "react-redux";
import { HashLoader } from "react-spinners";

export default function Spinner() {
  let { isLoading } = useSelector((state) => state.spinnerReducer);

  return isLoading ? (
    <div className="h-screen w-screen fixed left-0 top-0 bg-white flex justify-center items-center z-50">
      <HashLoader size={130} color="#fd5a61" />
    </div>
  ) : (
    <></>
  );
}
