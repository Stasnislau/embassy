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
        <div className="dashboard-box">
          <VisitCard {...props}/>
        </div>
        <div className="dashboard-box">
          <p>Action 2</p>
        </div>
        <div className="dashboard-box">
          <p>Action 3</p>
        </div>
        <div className="dashboard-box">
          <p>Action 4</p>
        </div>
        <div className="dashboard-box">
          <p>Action 5</p>
        </div>
        <div className="dashboard-box">
          <p>Action 6</p>
        </div>
      </div>
    </div>
  );
};


export default Dashboard;
