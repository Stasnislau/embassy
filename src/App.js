import React from "react";
import "./App.css";
import LoginPage from "../src/Pages/LoginPage";
import Footer from "../src/Components/Footer";
import CreateAccountPage from "../src/Pages/CreateAccountPage";
// import Header from "../src/Components/Header";
function App() {
  return (
    <div className="app">
      {/* <Header/> */}
      {/* <LoginPage /> */}
      <CreateAccountPage />
      <Footer />
    </div>
  );
}

export default App;
