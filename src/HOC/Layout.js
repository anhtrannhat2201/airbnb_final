import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

export default function Layout({ Component }) {
  return (
    <div>
      <Header />
      <Component />
      <Footer />
    </div>
  );
}
