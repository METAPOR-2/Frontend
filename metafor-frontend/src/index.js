import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import DoctorHome from "./pages/doctorHome";
import LicenseRegister from "./pages/license_register";
import reportWebVitals from "./reportWebVitals";
import Select from "./pages/select";
import Login from "./pages/login";
import DoctorProfile from "./pages/doctorProfile";
import StartPage from "./pages/startPage";
import Hospitals from "./pages/Hospital";
import Map from "./pages/map";
import CustomerHome from "./pages/customerHome";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/select" element={<Select />} />
      <Route path="/login" element={<Login />} />
      <Route path="/doctorprofile" element={<DoctorProfile />} />
      <Route path="/startpage" element={<StartPage />} />
      <Route path="/license-register" element={<LicenseRegister />} />
      <Route path="/doctor-home" element={<DoctorHome />} />
      <Route path="/hospital" element={<Hospitals />} />
      <Route path="/map" element={<Map />} />
      <Route path="/customerhome" element={<CustomerHome />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
