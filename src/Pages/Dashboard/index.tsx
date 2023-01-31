import "./index.scss";

import Header from "../../Components/Header";
import React from "react";
import VisaCard from "../../Components/EventCards/VisaCard";
import VisitCard from "../../Components/EventCards/VisitCard";
import { useState } from "react";

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const visits = [
    {
      date: "2020-12-12",
      time: "12:00",
      location: "1 Main Street, New York, NY 10001",
      description: "Visit to submit documents",
    },
    {
      date: "2020-12-12",
      time: "12:00",
      location: "2 Main Street, New York, NY 10001",
      description: "Visit to submit new documents",
    },
  ];
  const visa = {
    dateOfSubmission: "2020-12-12",
    dateOfDecision: "2020-12-12",
    status: "Pending",
    description: "",
  };
  const maxPages =
    (visits.length + visa.status ? 1 : 0) % 6 === 0
      ? (visits.length + visa.status ? 1 : 0) / 6
      : Math.floor((visits.length + visa.status ? 1 : 0) / 6) + 1;

  return (
    <div className="dashboard-container">
      <div className="dashboard-boxes-container">
        {visa.status ? (
          <div className="dashboard-box">
            <VisaCard props={visa} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Dashboard;
