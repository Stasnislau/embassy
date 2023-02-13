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
    {
      date: "2020-12-12",
      time: "12:00",
      location: "8 Main Street, New York, NY 10001",
      description: "Visit to submit new documents",
    },
    {
      date: "2020-12-12",
      time: "12:00",
      location: "9 Main Street, New York, NY 10001",
      description: "Visit to submit new documents",
    },
    {
      date: "2020-12-12",
      time: "12:00",
      location: "10 Main Street, New York, NY 10001",
      description: "Visit to submit new documents",
    },
    {
      date: "2020-12-12",
      time: "12:00",
      location: "10 Main Street, New York, NY 10001",
      description: "Visit to submit new documents",
    },
    {
      date: "2020-12-12",
      time: "12:00",
      location: "10 Main Street, New York, NY 10001",
      description: "Visit to submit new documents",
    },
    {
      date: "2020-12-12",
      time: "12:00",
      location: "10 Main Street, New York, NY 10001",
      description: "Visit to submit new documents",
    },
    {
      date: "2020-12-12",
      time: "12:00",
      location: "10 Main Street, New York, NY 10001",
      description: "Visit to submit new documents",
    },
    {
      date: "2020-12-12",
      time: "12:00",
      location: "10 Main Street, New York, NY 10001",
      description: "Visit to submit new documents",
    },
    {
      date: "2020-12-12",
      time: "12:00",
      location: "10 Main Street, New York, NY 10001",
      description: "Visit to submit new documents",
    },
    {
      date: "2020-12-12",
      time: "12:00",
      location: "10 Main Street, New York, NY 10001",
      description: "Visit to submit new documents",
    },
    {
      date: "2020-12-12",
      time: "12:00",
      location: "10 Main Street, New York, NY 10001",
      description: "Visit to submit new documents",
    },
    {
      date: "2020-12-12",
      time: "12:00",
      location: "10 Main Street, New York, NY 10001",
      description: "Visit to submit new documents",
    },
    {
      date: "2020-12-12",
      time: "12:00",
      location: "10 Main Street, New York, NY 10001",
      description: "Visit to submit new documents",
    },
    {
      date: "2020-12-12",
      time: "12:00",
      location: "10 Main Street, New York, NY 10001",
      description: "Visit to submit new documents",
    },
    {
      date: "2020-12-12",
      time: "12:00",
      location: "10 Main Street, New York, NY 10001",
      description: "Visit to submit new documents",
    },
    {
      date: "2020-12-12",
      time: "12:00",
      location: "10 Main Street, New York, NY 10001",
      description: "Visit to submit new documents",
    },
    {
      date: "2020-12-12",
      time: "12:00",
      location: "10 Main Street, New York, NY 10001",
      description: "Visit to submit new documents",
    },
    {
      date: "2020-12-12",
      time: "12:00",
      location: "10 Main Street, New York, NY 10001",
      description: "Visit to submit new documents",
    },
    {
      date: "2020-12-12",
      time: "12:00",
      location: "10 Main Street, New York, NY 10001",
      description: "Visit to submit new documents",
    },
    {
      date: "2020-12-12",
      time: "12:00",
      location: "10 Main Street, New York, NY 10001",
      description: "Visit to submit new documents",
    },
    {
      date: "2020-12-12",
      time: "12:00",
      location: "10 Main Street, New York, NY 10001",
      description: "Visit to submit new documents",
    },
    {
      date: "2020-12-12",
      time: "12:00",
      location: "10 Main Street, New York, NY 10001",
      description: "Visit to submit new documents",
    },
    {
      date: "2020-12-12",
      time: "12:00",
      location: "10 Main Street, New York, NY 10001",
      description: "Visit to submit new documents",
    },
    {
      date: "2020-12-12",
      time: "12:00",
      location: "10 Main Street, New York, NY 10001",
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
      : Math.ceil((visits.length + (visa.status ? 1 : 0)) / 6);
  const renderPagination = () => {
    const totalPages = maxPages;
    const pagesToDisplay = [];
    const getTemplate = (index = 0) => {
      return (
        <button
          className={ index === currentPage ? "pagination-item active-pagination-item" : "pagination-item"}
          onClick={() => setCurrentPage(index)}
        >
          {index}
        </button>
      );
    };
    if (totalPages < 5)
      for (let i = 1; i <= totalPages; i++) {
        pagesToDisplay.push(getTemplate(i));
      }
    else if (currentPage === 1) {
      for (let i = 1; i <= 4; i++) {
        pagesToDisplay.push(getTemplate(i));
      }
      pagesToDisplay.push(getTemplate(totalPages));
    } else if (currentPage === totalPages) {
      pagesToDisplay.push(getTemplate(1));
      for (let i = 3; i >= 1; i--) {
        pagesToDisplay.push(getTemplate(totalPages - i));
      }
      pagesToDisplay.push(getTemplate(totalPages));
    } else if (currentPage === 2) {
      pagesToDisplay.push(getTemplate(1));
      for (let i = 1; i <= 3; i++) {
        pagesToDisplay.push(getTemplate(currentPage + i - 1));
      }
      pagesToDisplay.push(getTemplate(totalPages));
    } else if (currentPage === totalPages - 1) {
      pagesToDisplay.push(getTemplate(1));
      for (let i = 2; i >= 0; i--) {
        pagesToDisplay.push(getTemplate(currentPage - i));
      }
      pagesToDisplay.push(getTemplate(totalPages));
    } else {
      pagesToDisplay.push(getTemplate(1));
      pagesToDisplay.push(getTemplate(currentPage - 1));
      pagesToDisplay.push(getTemplate(currentPage));
      pagesToDisplay.push(getTemplate(currentPage + 1));
      pagesToDisplay.push(getTemplate(totalPages));
    }

    return pagesToDisplay.map((item) => {
      return item;
    });
  };
  const checkNumberToSliceBegin = () => {
    if (visa.status)
      if (currentPage === 1) {
        return 0;
      } else {
        return (currentPage - 1) * 6 - 1;
      }
    else if (currentPage === 1) {
      return 0;
    } else {
      return (currentPage - 1) * 6;
    }
  };
  const checkNumberToSliceEnd = () => {
    if (visa.status)
      if (currentPage === 1) {
        return 5;
      } else {
        return currentPage * 6 - 1;
      }
    else if (currentPage === 1) {
      return 6;
    } else {
      return currentPage * 6;
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
            .slice(checkNumberToSliceBegin(), checkNumberToSliceEnd())
            .map((visit) => {
              return (
                <div className="dashboard-box">
                  <VisitCard props={visit} />
                </div>
              );
            })}
        </div>
        <div className="dashboard-pagination">{renderPagination()}</div>
      </div>
    </div>
  );
};

export default Dashboard;
