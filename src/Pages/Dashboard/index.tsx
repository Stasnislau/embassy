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
    {
      date: "2020-12-12",
      time: "12:00",
      location: "7 Main Street, New York, NY 10001",
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
    (visits.length + (visa.status ? 1 : 0)) % 6 === 0
      ? (visits.length + (visa.status ? 1 : 0)) / 6
      : Math.floor((visits.length + (visa.status ? 1 : 0)) / 6) + 1;
  const checkEventsNumberOnThePage = () => {
    if (visa.status) {
      if (currentPage === 1) {
        return 0;
      } else {
        return 5;
      }
    } else {
      if (currentPage === 1) {
        return 0;
      } else {
        return 6;
      }
    }
  };

  return (
    <div className="dashboard-container">
      <Header />
      <div className="dashboard-body">
        <div className="dashboard-boxes-container">
          {visa.status && currentPage === 1 ? (
            <div className="dashboard-box">
              <VisaCard props={visa} />
            </div>
          ) : null}
          {visits
            .slice(
              checkEventsNumberOnThePage() + (visa.status && currentPage === 1 ? 1 : 0),
              checkEventsNumberOnThePage() + 6 * (currentPage)
              
            )
            .map((visit) => {
              return (
                <div className="dashboard-box">
                  <VisitCard props={visit} />
                </div>
              );
            })}
        </div>
        <div className="dashboard-pagination">
          {currentPage > 1 && (
            <button
              className="dashboard-pagination-button"
              onClick={() => {
                if (currentPage > 1) {
                  setCurrentPage(currentPage - 1);
                }
              }}
            >
              Previous
            </button>
          )}
          <p className="dashboard-pagination-text">
            {currentPage} of {maxPages}
          </p>
          {
            currentPage < maxPages && (<button
              className="dashboard-pagination-button"
              onClick={() => {
                if (currentPage < maxPages) {
                  setCurrentPage(currentPage + 1);
                }
              }}
            >
              Next
            </button>)
          }
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
