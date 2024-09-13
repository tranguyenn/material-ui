import * as React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import AuthRequire from "./AuthRequrie";
import Homes from "../pages/HomePage";
import JobDetailPage from "../pages/JobDetailPage";
import LoginPage from "../pages/LoginPage";
import Layout from "../pages/Layout";

function Router() {
  const location = useLocation();
  const state = location.state;
  return (
    <>
      <Routes
        location={
          location.state?.backgroundLocation
            ? location.state.backgroundLocation
            : location
        }
      >
        <Route path="/" element={<Layout />}>
          <Route index element={<Homes />}></Route>
        </Route>
      </Routes>
      {state?.backgroundLocation && (
        <Routes>
          <Route path="/job/:id" element={<AuthRequire><JobDetailPage /></AuthRequire>} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      )}
    </>
  );
}

export default Router;
