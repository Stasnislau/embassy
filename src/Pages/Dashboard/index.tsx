import "./index.scss";

import Header from "../../Components/Header";
import React from "react";
import VisaCard from "../../Components/EventCards/VisaCard";
import VisitCard from "../../Components/EventCards/VisitCard";
import { useState } from "react";

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
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
    {
      date: "2020-12-12",
      time: "12:00",
      location: "3 Main Street, New York, NY 10001",
      description: "Visit to submit new documents",
    },
    {
      date: "2020-12-12",
      time: "12:00",
      location: "4 Main Street, New York, NY 10001",
      description: "Visit to submit new documents",
    },
    {
      date: "2020-12-12",
      time: "12:00",
      location: "5 Main Street, New York, NY 10001",
      description: "Visit to submit new documents",
    },
    {
      date: "2020-12-12",
      time: "12:00",
      location: "6 Main Street, New York, NY 10001",
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
  const [currentDisplayed, setCurrentDisplayed] = useState(0);

  return (
    <div className="dashboard-container">
      <Header />
      <div className="dashboard-boxes-container">
        {visa.status && currentPage !== 1 ? (
          <div className="dashboard-box">
            <VisaCard props={visa} />
            
          </div>
        ) : null}
        {visits.map((visit, index) => {
          if (index >= currentPage * 6 && index < (currentPage + 1) * 6) {
            return (
              <div className="dashboard-box">
                <VisitCard props={visit} />
              </div>
            );
          }
        })}
      </div>
      <div className="dashboard-pagination">
        <button
          className="dashboard-pagination-button"
          onClick={() => {
            if (currentPage > 0) {
              setCurrentPage(currentPage - 1);
            }
          }}
        >
          Previous
        </button>
        <p className="dashboard-pagination-text">
          {currentPage + 1} of {maxPages}
        </p>
        <button
          className="dashboard-pagination-button"
          onClick={() => {
            if (currentPage < maxPages - 1) {
              setCurrentPage(currentPage + 1);
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
