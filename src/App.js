import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import SecureView from "./HOC/SecureView";
import Layout from "./HOC/Layout";
import HomePage from "./Page/HomePage/HomePage";
import LoginPage from "./Page/LoginPage/LoginPage";
import Spinner from "./Components/Spinner/Spinner";
import RoomDetail from "./Page/RoomDetail/RoomDetail";
function App() {
  return (
    <div>
      <Spinner />

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
          <Route
            path="/roomdetail/:id"
            element={
              <SecureView>
                <Layout Component={RoomDetail} />
              </SecureView>
            }
          />
          <Route path="/login" element={<LoginPage Component={LoginPage} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
