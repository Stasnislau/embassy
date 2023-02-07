import "./index.scss";

import Header from "../../Components/Header";
import React from "react";
import VisitCard from "../../Components/EventCards/VisitCard";
import plusIcon from "../../Pictures/plus.svg";
import { useState } from "react";

const VisitsPage = () => {
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
  const maxPages = Math.floor(visits.length / 6);
  const [currentPage, setCurrentPage] = useState(1);
  const renderPagination = () => {
    const totalPages = maxPages;
    const pagesToDisplay = [];
    const getTemplate = (index = 0) => {
      return (
        <button
          className={
            index === currentPage
              ? "pagination-item active-pagination-item"
              : "pagination-item"
          }
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
    if (currentPage === 1) return 0;
    else return (currentPage - 1) * 6 - 1;
  };
  const checkNumberToSliceEnd = () => {
    return currentPage * 6 - 1;
  };

  return (
    <div className="visits-page-container">
      <Header />
      <div className="visits-page-body">
        <div className="visits-page-boxes-container">
          {" "}
          <div className="visits-page-box">
            <button className="visits-page-add-button">
              <div className="schedule-text">Schedule a visit</div>
              <img src={plusIcon} alt="plus icon" className="plus-icon" />
            </button>
          </div>
          {visits
            .slice(checkNumberToSliceBegin(), checkNumberToSliceEnd())
            .map((visit) => {
              return (
                <div className="visits-page-box">
                  <VisitCard props={visit} />
                </div>
              );
            })}
        </div>
        <div className="visits-page-pagination">{renderPagination()}</div>
      </div>
    </div>
  );
};

export default VisitsPage;
