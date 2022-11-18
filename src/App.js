import logo from "./logo.svg";
import "./App.css";
// import "antd/dist/antd.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SecureView from "./HOC/SecureView";
import Layout from "./HOC/Layout";
import HomePage from "./Page/HomePage/HomePage";
import LoginPage from "./Page/LoginPage/LoginPage";

import Privacy from "./Components/Footer/DetailFooter/Privacy";
import Rules from "./Components/Footer/DetailFooter/Rules";
import Sitemap from "./Components/Footer/DetailFooter/Sitemap";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <SecureView>
                <Layout Component={HomePage} />
              </SecureView>
            }
          />
          <Route path="/login" element={<LoginPage Component={LoginPage} />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/sitemap" element={<Sitemap />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
