import "./index.scss";

import Header from "../../Components/Header";
import React from "react";
import VisitCard from "../../Components/EventCards/VisitCard";

const Dashboard = () => {
  const props = {
    date: "12/12/2020",
    time: "12:00",
    location: "Office",
    description: "Visit to the office",
  };
  return (
    <div className="dashboard-container">
      <Header />
      <div className="dashboard-boxes-container">
        <div className="dashboard-box" onClick={() => handleClick1()}>
          <VisitCard {...props}/>
        </div>
        <div className="dashboard-box" onClick={() => handleClick2()}>
          <p>Action 2</p>
        </div>
        <div className="dashboard-box" onClick={() => handleClick3()}>
          <p>Action 3</p>
        </div>
        <div className="dashboard-box" onClick={() => handleClick4()}>
          <p>Action 4</p>
        </div>
        <div className="dashboard-box" onClick={() => handleClick5()}>
          <p>Action 5</p>
        </div>
        <div className="dashboard-box" onClick={() => handleClick6()}>
          <p>Action 6</p>
        </div>
      </div>
    </div>
  );
};

const handleClick1 = () => {
  // Code for Action 1
};
const handleClick2 = () => {
  // Code for Action 2
};
const handleClick3 = () => {
  // Code for Action 3
};
const handleClick4 = () => {
  // Code for Action 4
};
const handleClick5 = () => {
  // Code for Action 5
};
const handleClick6 = () => {
  // Code for Action 6
};

export default Dashboard;
