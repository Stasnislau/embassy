import "./index.scss";

import React from "react";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-boxes-container">
        <div className="dashboard-box" onClick={() => handleClick1()}>
          <p>Action 1</p>
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
