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
import BecomeAHost from "./Page/BecomeAHost/BecomeAHost";
import SignUpPage from "./Page/SignUpPage/SignUpPage";
import UserInfor from "./Page/UserInforPage/UserInfor";
import Privacy from "./Components/Footer/DetailFooter/Privacy";
import Rules from "./Components/Footer/DetailFooter/Rules";
import Sitemap from "./Components/Footer/DetailFooter/Sitemap";
import RoomsAdmin from "./Page/Admin/RoomsAdmin/RoomsAdmin";
import AddNewRoomsAdmin from "./Page/Admin/RoomsAdmin/AddNewRoomsAdmin/AddNewRoomsAdmin";
import EditRooms from "./Page/Admin/RoomsAdmin/EditRoomsAdmin/EditRoomsAdmin";
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
          <Route path="/becomeahost" element={<BecomeAHost />} />
          <Route
            path="/roomdetail/:id/:tenPhong"
            element={
              <SecureView>
                <Layout Component={RoomDetail} />
              </SecureView>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/userinfor" element={<Layout Component={UserInfor} />} />
          <Route path="/signup" element={<SignUpPage />} />

          <Route
            path="/admin/locations"
            element={
              <SecureView>
                <Admin Component={LocationsAdmin} />
              </SecureView>
            }
          />
          <Route
            path="/admin/rooms"
            element={
              <SecureView>
                <Admin Component={RoomsAdmin} />
              </SecureView>
            }
          />
          <Route
            path="/admin/rooms/addnew"
            element={
              <SecureView>
                <Admin Component={AddNewRoomsAdmin} />
              </SecureView>
            }
          />
          <Route
            path="/admin/rooms/editrooms/:id"
            element={
              <SecureView>
                <Admin Component={EditRooms} />
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
          <Route
            path="/admin/users/:id/:name"
            element={
              <SecureView>
                <Admin Component={UserInfor} />
              </SecureView>
            }
          />

          <Route path="/privacy" element={<Privacy />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/sitemap" element={<Sitemap />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
