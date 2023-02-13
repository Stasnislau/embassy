import "./index.scss";

import React, { useState } from "react";

import Header from "../../Components/Header";
import SurenessModal from "../../Components/SurenessModal";

const VisitPage = (id: number) => {
  // try catch for extracting and finding id
  const visit = {
    id: 1,
    idOfAccount: 1,
    name: "John",
    surname: "Doe",
    email: "something@gmail.com",
    date: "2020-01-01",
    time: "12:00",
    location: "Some location",
    description: "Some description",
  };
  const found = true;
  const [open, setOpen] = useState(false);
  return (
    <div className="visit-page">
      <Header />
      {found && (
        <div className="visit-container">
          <h1 className="visit-page-title">Visit to the office</h1>
          <hr className="visit-page-line" />
          <div className="visit-fields-container">
            <div className="visit-field">
              <div className="visit-page-subtitle">
                Personal Information{" "}
              </div>
              <div className="visit-field name-field">Name: {visit.name}</div>
              <div className="visit-field surname-field">
                {" "}
                Surname: {visit.surname}
              </div>
              <div className="visit-field email-field">
                {" "}
                Email: {visit.email}
              </div>
              <div className="visit-page-subtitle">Visit Information </div>
              <div className="visit-field date-field">
                {" "}
                Date: {visit.date}
              </div>
              <div className="visit-field time-field">
                {" "}
                Time: {visit.time}
              </div>
              <div className="visit-field location-field">
                {" "}
                Location: {visit.location}
              </div>
              <div className="visit-field description-field">
                {" "}
                Description: {visit.description}
              </div>
            </div>

            <div className="delete-button-container">
              <button 
                className="delete-button"
                onClick={() => {
                  setOpen(true);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      {open && (
        <SurenessModal
          open={open}
          handleClose={() => {
            setOpen(false);
          }}
          handleConfirm={() => {
            // delete visit
            setOpen(false);
          }}
          text="delete this visit"
        />
      )}
      {!found && !open && <h1 className="error-header">There no such visit</h1>}
    </div>
  );
};

export default VisitPage;
