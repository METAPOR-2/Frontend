import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import DoctorHome from "./pages/doctorHome";
import DoctorProfile from "./pages/doctorProfile";
import DoctorSearch from "./pages/doctorSearch";
import LicenseRegister from "./pages/license_register";
import Signup from "./pages/Signup";
import Login from "./pages/login";
import Map from "./pages/map";
import Select from "./pages/select";
import StartPage from "./pages/startPage";
import reportWebVitals from "./reportWebVitals";
import DoctorDetail from "./pages/doctorDetail";
import CustomerHome from "./pages/customerHome";
import CustomerHomeHospital from "./pages/customerHomeHospital";
import Calendar from "./pages/calendar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/select" element={<Select />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/doctorprofile" element={<DoctorProfile />} />
      <Route path="/startpage" element={<StartPage />} />
      <Route path="/license-register" element={<LicenseRegister />} />
      <Route path="/doctor-home" element={<DoctorHome />} />
      <Route path="/doctor-search" element={<DoctorSearch />} />
      <Route path="/doctor-detail" element={<DoctorDetail />} />
      <Route path="/map" element={<Map />} />
      <Route path="/map" element={<Map />} />
      <Route path="/customerhome" element={<CustomerHome />} />
      <Route path="/customerhomehospital" element={<CustomerHomeHospital />} />
      <Route path="/calendar" element={<Calendar />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
