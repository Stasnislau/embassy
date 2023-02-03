import "./App.css";

import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import CreateAccountPage from "../src/Pages/CreateAccountPage";
import Dashboard from "../src/Pages/Dashboard";
import Footer from "../src/Components/Footer";
import ForgotPasswordPage from "../src/Pages/ForgotPasswordPage";
import LoginPage from "../src/Pages/LoginPage";
import React from "react";
import VisaApplication from "../src/Pages/VisaApplication";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app-body">
          <Routes>
            <Route exact path="/login" element={<LoginPage />}></Route>
            <Route
              exact
              path="/create-account"
              element={<CreateAccountPage />}
            ></Route>
            <Route
              exact
              path="/forgot-password"
              element={<ForgotPasswordPage />}
            ></Route>
            <Route exact path="/dashboard" element={<Dashboard />}></Route>
            <Route
              exact
              path="/visa-application"
              element={<VisaApplication />}
            ></Route>
            <Route path="*" element={<Navigate to="/login" />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
