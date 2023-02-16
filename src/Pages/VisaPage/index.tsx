import "./index.scss";

import React, { useState } from "react";

import Header from "../../Components/Header";
import SurenessModal from "../../Components/SurenessModal";

interface VisaInterface {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  passportNumber: string;
  passportExpiration: string;
  passportCountry: string;
  visaType: string;
  visaDuration: string;
  visaDate: string;
  comments: string;
  status: string;
}

const VisaPage = (id: number) => {
  // try catch for extracting and finding id
  const visa: VisaInterface = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 123 456 7890",
    address: "123 Main St",
    city: "Anytown",
    state: "ST",
    zip: "12345",
    country: "USA",
    passportNumber: "1234567890",
    passportExpiration: "2024-12-31",
    passportCountry: "USA",
    visaType: "Tourist",
    visaDuration: "90 days",
    visaDate: "2023-03-01",
    comments: "",
    status: "Pending",
  };

  const [open, setOpen] = useState(false);
  const found = true;

  return (
    <div className="visa-page">
      <Header />
      {found && (
        <div className="visa-container">
          <h1 className="visa-page-title">Visa Application</h1>
          <hr className="visa-page-line" />
          <div className="visa-fields-container">
            <div className="visa-field">
              <div className="visa-field status-field">
                {" "}
                Status: {visa.status}
              </div>
              <div className="visa-page-subtitle">Personal Information </div>
              <div className="visa-field name-field">
                First Name: {visa.firstName}
              </div>
              <div className="visa-field surname-field">
                {" "}
                Last Name: {visa.lastName}
              </div>
              <div className="visa-field email-field"> Email: {visa.email}</div>
              <div className="visa-field phone-field"> Phone: {visa.phone}</div>
              <div className="visa-field address-field">
                {" "}
                Address: {visa.address}
              </div>
              <div className="visa-field city-field"> City: {visa.city}</div>
              <div className="visa-field state-field"> State: {visa.state}</div>
              <div className="visa-field zip-field"> Zip: {visa.zip}</div>
              <div className="visa-field country-field">
                {" "}
                Country: {visa.country}
              </div>
              <div className="visa-page-subtitle">Passport Information </div>
              <div className="visa-field passport-number-field">
                {" "}
                Passport Number: {visa.passportNumber}
              </div>
              <div className="visa-field passport-expiration-field">
                {" "}
                Passport Expiration: {visa.passportExpiration}
              </div>
              <div className="visa-field passport-country-field">
                {" "}
                Passport Country: {visa.passportCountry}
              </div>
              <div className="visa-page-subtitle">Visa Information </div>
              <div className="visa-field visa-type-field">
                {" "}
                Visa Type: {visa.visaType}
              </div>
              <div className="visa-field visa-duration-field">
                {" "}
                Visa Duration: {visa.visaDuration}
              </div>
              <div className="visa-field visa-date-field">
                {" "}
                Visa Date: {visa.visaDate}
              </div>
              <div className="visa-field comments-field">
                {" "}
                Comments: {visa.comments}
              </div>
            </div>
          </div>
          <div className="delete-button-container">
            <button
              className="visa-button delete-button"
              onClick={() => {
                setOpen(true);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      )}

      <SurenessModal
        open={open}
        handleClose={() => {
          setOpen(false);
        }}
        handleConfirm={() => {
          // delete visa
          setOpen(false);
        }}
        text="delete this visa"
      />
    </div>
  );
};

export default VisaPage;
