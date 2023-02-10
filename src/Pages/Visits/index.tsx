import "./index.scss";

import * as Yup from "yup";

import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";

import Header from "../../Components/Header";
import Modal from "@mui/material/Modal";
import TextError from "../../Components/TextError";
import VisitCard from "../../Components/EventCards/VisitCard";
import plusIcon from "../../Pictures/plus.svg";

interface visitInterface {
  date: string;
  time: string;
  location: string;
  description: string;
}

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
  const validationSchema = Yup.object().shape({
    date: Yup.string().required("Required"),
    time: Yup.string().required("Required"),
  });
  const checkNumberToSliceBegin = () => {
    if (currentPage === 1) return 0;
    else return (currentPage - 1) * 6 - 1;
  };
  const checkNumberToSliceEnd = () => {
    return currentPage * 6 - 1;
  };
  const initialValues = {
    date: "",
    time: "",
    location: "",
    description: "",
  };
  const onSubmit = (values: visitInterface) => {
    visits.push(values);
  };
  const [openedNewVisit, setOpenedNewVisit] = useState(false);

  return (
    <div className="visits-page-container">
      <Header />
      <div className="visits-page-body">
        <div className="visits-page-boxes-container">
          {" "}
          <div className="visits-page-box">
            <button
              className="visits-page-add-button"
              onClick={() => {
                console.log("clicked", openedNewVisit);
                setOpenedNewVisit(true);
                console.log("clicked", openedNewVisit);
              }}
            >
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
        <div className="dashboard-pagination">{renderPagination()}</div>

        <Modal
          open={openedNewVisit}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="add-visit-modal"
        >
          <div className="modal-container">
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              <div className="modal-form-container">
                <Form className="modal-form">
                  <div className="modal-form-inputs">
                    <div className="several-fields-container">
                      <div className="form-control">
                        <label htmlFor="date">Date</label>
                        <Field
                          type="date"
                          id="date"
                          name="date"
                          className="modal-form-input input-field"
                        />
                        <ErrorMessage name="date" component={TextError} />
                      </div>
                      <div className="form-control">
                        <label htmlFor="time">Time</label>
                        <Field
                          type="time"
                          id="time"
                          value="13:00:00"
                          min="09:00:00"
                          max="18:00:00"
                          step="3600"
                          name="time"
                          className="modal-form-input input-field"
                        />
                        <ErrorMessage name="time" component={TextError} />
                      </div>
                    </div>
                    <div className="form-control">
                      <label htmlFor="location">Location</label>
                      <select
                        name="location"
                        id="location"
                        className="input-selector"
                      >
                        <option value="10 Main Street, New York, NY 10001">
                          10 Main Street, New York, NY 10001
                        </option>
                        <option value="15 Main Street, New York, NY 10001">
                          15 Main Street, New York, NY 10001
                        </option>
                      </select>
                    </div>
                    <div className="form-control">
                      <label htmlFor="description">Purpose of the visit</label>
                      <select
                        name="description"
                        id="description"
                        className="input-selector"
                      >
                        <option value="Visit to submit new documents">
                          Visit to submit new documents
                        </option>
                        <option value="Visit to ask questions about my application">
                          Visit to ask questions about my application
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="buttons-container">
                    <button className="submit-button" type="submit">
                      Add
                    </button>
                    <button
                      className="cancel-button"
                      type="reset"
                      onClick={() => {
                        setOpenedNewVisit(false);
                      }}
                    >
                      Close
                    </button>
                  </div>
                </Form>
              </div>
            </Formik>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default VisitsPage;
