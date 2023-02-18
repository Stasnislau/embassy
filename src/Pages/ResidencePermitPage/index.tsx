import "./index.scss";

import React, { useState } from "react";

import Header from "../../Components/Header";
import SurenessModal from "../../Components/SurenessModal";

interface ResidencePermitInterface {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  birthDate: string;
  birthPlace: string;
  address: string;
  city: string;
  country: string;
  zipCode: string;
  residencePermitType: string;
  passportNumber: string;
  passportIssuingCountry: string;
  passportExpirationDate: string;
  passportIssuingDate: string;
  comments: string;
  status: string;
}

const ResidencePermitPage = (id: number) => {
  // try catch for extracting and finding id
  const residencePermit: ResidencePermitInterface = {
    firstName: "John",
    lastName: "Doe",
    email: "",
    phoneNumber: "",
    birthDate: "",
    birthPlace: "",
    address: "",
    city: "",
    country: "",
    zipCode: "",
    residencePermitType: "",
    passportNumber: "",
    passportIssuingCountry: "",
    passportExpirationDate: "",
    passportIssuingDate: "",
    comments: "",
    status: "Pending",
  };
  const found = true;
  const [open, setOpen] = useState(false);
  return (
    <div className="residence-permit-page">
      <Header />
      {found && (
        <div className="residence-permit-page-container">
          <h1 className="residence-permit-page-title">
            Residence Permit Application
          </h1>
          <hr className="residence-permit-page-line" />
          <div className="residence-permit-fields-container">
            <div className="residence-permit-field status-field">
              <label className="residence-permit-field-label">Status</label>{" "}
              Status: {residencePermit.status}
            </div>
            <div className="residence-permit-field">
              <label className="residence-permit-field-label">First Name</label>{" "}
              {residencePermit.firstName}
            </div>
            <div className="residence-permit-field">
              <label className="residence-permit-field-label">Last Name</label>{" "}
              {residencePermit.lastName}
            </div>
            <div className="residence-permit-field">
              <label className="residence-permit-field-label">Email</label>{" "}
              {residencePermit.email}
            </div>
            <div className="residence-permit-field">
              <label className="residence-permit-field-label">
                Phone Number
              </label>{" "}
              {residencePermit.phoneNumber}
            </div>
            <div className="residence-permit-field">
              <label className="residence-permit-field-label">Birth Date</label>{" "}
              {residencePermit.birthDate}
            </div>
            <div className="residence-permit-field">
              <label className="residence-permit-field-label">
                Birth Place
              </label>{" "}
              {residencePermit.birthPlace}
            </div>
            <div className="residence-permit-field">
              <label className="residence-permit-field-label">Address</label>{" "}
              {residencePermit.address}
            </div>
            <div className="residence-permit-field">
              <label className="residence-permit-field-label">City</label>{" "}
              {residencePermit.city}
            </div>
            <div className="residence-permit-field">
              <label className="residence-permit-field-label">Country</label>{" "}
              {residencePermit.country}
            </div>
            <div className="residence-permit-field">
              <label className="residence-permit-field-label">Zip Code</label>{" "}
              {residencePermit.zipCode}
            </div>
            <div className="residence-permit-field">
              <label className="residence-permit-field-label">
                Residence Permit Type
              </label>{" "}
              {residencePermit.residencePermitType}
            </div>
            <div className="residence-permit-field">
              <label className="residence-permit-field-label">
                Passport Number
              </label>{" "}
              {residencePermit.passportNumber}
            </div>
            <div className="residence-permit-field">
              <label className="residence-permit-field-label">
                Passport Issuing Country
              </label>{" "}
              {residencePermit.passportIssuingCountry}
            </div>
            <div className="residence-permit-field">
              <label className="residence-permit-field-label">
                Passport Expiration Date
              </label>{" "}
              {residencePermit.passportExpirationDate}
            </div>
            <div className="residence-permit-field">
              <label className="residence-permit-field-label">
                Passport Issuing Date
              </label>{" "}
              {residencePermit.passportIssuingDate}
            </div>
            <div className="residence-permit-field">
              <label className="residence-permit-field-label">Comments</label>{" "}
              {residencePermit.comments}
            </div>
          </div>
          <div className="residence-permit-buttons-container">
            <button
              className="residence-permit-button"
              onClick={() => setOpen(true)}
            >
              Delete
            </button>
            <button className="residence-permit-button">Edit</button>
          </div>
        </div>
      )}
      {!found && (
        <h1 className="error-header">Residence Permit Application Not Found</h1>
      )}
      <SurenessModal
        open={open}
        handleClose={() => {
          setOpen(false);
        }}
        handleConfirm={() => {
          // delete application
          setOpen(false);
        }}
        text="delete this residence permit application"
      />
    </div>
  );
};

export default ResidencePermitPage;
