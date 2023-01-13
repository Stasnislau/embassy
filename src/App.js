import React from "react";
import "./App.css";
import LoginPage from "../src/Pages/LoginPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Footer from "../src/Components/Footer";
import CreateAccountPage from "../src/Pages/CreateAccountPage";
import ForgotPasswordPage from "../src/Pages/ForgotPasswordPage";
import Dashboard from "../src/Pages/Dashboard";

// import Header from "../src/Components/Header";
function App() {
  return (
    <Router>
      <div className="app">
        {/* <Header/> */}
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
            <Route
              exact
              path="/Dashboard"
              element={Dashboard}
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
