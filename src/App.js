import React from "react";
import "./App.css";
import LoginPage from "../src/Pages/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../src/Components/Footer";
import CreateAccountPage from "../src/Pages/CreateAccountPage";
// import Header from "../src/Components/Header";
function App() {
  return (
    <Router>
      <div className="app">
        {/* <Header/> */}
        <Routes>
          <Route exact path="/login" element={<LoginPage />}></Route>
          <Route
            exact
            path="/create-account"
            element={<CreateAccountPage />}
          ></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
