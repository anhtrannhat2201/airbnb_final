import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import SecureView from "./HOC/SecureView";
import Layout from "./HOC/Layout";
import HomePage from "./Page/HomePage/HomePage";
import LoginPage from "./Page/LoginPage/LoginPage";
import Spinner from "./Components/Spinner/Spinner";
import RoomDetail from "./Page/RoomDetail/RoomDetail";
import Admin from "./Page/Admin/Admin";
import AddNewLocation from "./Page/Admin/LocationsAdmin/AddNewLocation";
import LocationsAdmin from "./Page/Admin/LocationsAdmin/LocationsAdmin";
import UserAdmin from "./Page/Admin/UsersAdmin/UsersAdmin";
import EditLocations from "./Page/Admin/LocationsAdmin/EditLocations";
import EditImageLocations from "./Page/Admin/LocationsAdmin/EditImageLocations";

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
            path="/roomdetail/:id/:tenPhong"
            element={
              <SecureView>
                <Layout Component={RoomDetail} />
              </SecureView>
            }
          />
          <Route path="/login" element={<LoginPage Component={LoginPage} />} />

          <Route
            path="/admin/locations"
            element={
              <SecureView>
                <Admin Component={LocationsAdmin} />
              </SecureView>
            }
          />
          <Route
            path="/admin/locations/addnew"
            element={
              <SecureView>
                <Admin Component={AddNewLocation} />
              </SecureView>
            }
          />
          <Route
            path="/admin/locations/editlocations/:id"
            element={
              <SecureView>
                <Admin Component={EditLocations} />
              </SecureView>
            }
          />
          <Route
            path="/admin/locations/editimagelocations/:id"
            element={
              <SecureView>
                <Admin Component={EditImageLocations} />
              </SecureView>
            }
          />
          <Route
            path="/admin/users"
            element={
              <SecureView>
                <Admin Component={UserAdmin} />
              </SecureView>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
