import "./index.scss";

import { ErrorMessage, Field, Form, Formik } from "formik";
import { Navigate, useNavigate } from "react-router-dom";
import React, { useState } from "react";

import Header from "../../Components/Header";

const AccountInfoPage = (accountId: number) => {
  const account = {
    id: 1,
    name: "John",
    surname: "Doe",
    email: "something@gmail.com",
    dateOfBirth: "2020-01-01",
    phoneNumber: "123456789",
    address: "Some address",
    city: "Some city",
    country: "Some country",
    zipCode: "12345",
    passportNumber: "123456789",
    passportExpirationDate: "2020-01-01",
    passportIssuingCountry: "Some country",
  };
  const found = true;
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  return (
    <div className="account-info-page">
      <Header />
      {found && !edit && (
        <div className="account-info-container">
          <h1 className="account-info-page-title">Account Information</h1>
          <hr className="account-info-page-line" />
          <div className="account-info">
            <div className="info-line name-line">Name: {account.name}</div>
            <div className="info-line surname-line">
              Surname: {account.surname}
            </div>
            <div className="info-line email-line">Email: {account.email}</div>
            <div className="info-line date-of-birth-line">
              Date of birth: {account.dateOfBirth}
            </div>
            <div className="info-line phone-number-line">
              Phone number: {account.phoneNumber}
            </div>
            <div className="info-line address-line">
              Address: {account.address}
            </div>
            <div className="info-line city-line">City: {account.city}</div>
            <div className="info-line country-line">
              Country: {account.country}
            </div>
            <div className="info-line zip-code-line">
              Zip code: {account.zipCode}
            </div>
            <div className="info-line passport-number-line">
              Passport number: {account.passportNumber}
            </div>
            <div className="info-line passport-expiration-date-line">
              Passport expiration date: {account.passportExpirationDate}
            </div>
            <div className="info-line passport-issuing-country-line">
              Passport issuing country: {account.passportIssuingCountry}
            </div>
          </div>
          <div className="buttons-container">
            <button
              className="edit-button"
              onClick={() => {
                setEdit(true);
              }}
            >
              Edit
            </button>
            <button
              className="back-button"
              onClick={() => {
                navigate(-1);
              }}
            >
              Back
            </button>
          </div>
        </div>
      )}
      {found && edit && (
        <div className="account-info-container">
          <h1 className="account-info-page-title">Account Information</h1>
          <hr className="account-info-page-line" />
        </div>
      )}

      {!found && (
        <div className="error-header">
          <h1 className="error-message-title">Error 404</h1>
          <h2 className="error-message-subtitle">Account not found</h2>
        </div>
      )}
    </div>
  );
};

export default AccountInfoPage;
