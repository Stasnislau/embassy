import "./index.scss";

import * as Yup from "yup";

import { ErrorMessage, Field, Form, Formik } from "formik";

import Header from "../../Components/Header";
import React from "react";
import TextError from "../../Components/TextError";
import { useNavigate } from "react-router-dom";

interface VisaValues {
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
}

const VisaApplication = () => {
  const initialValues: VisaValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    passportNumber: "",
    passportExpiration: "",
    passportCountry: "",
    visaType: "",
    visaDuration: "",
    visaDate: "",
  };
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("Required")
      .min(1, "Name is too short")
      .max(20, "Name is too long"),
    lastName: Yup.string()
      .required("Required")
      .min(1, "Surname is too short")
      .max(20, "Surname is too long"),
    email: Yup.string().email("Invalid email address").required("Required"),
    phone: Yup.string().required("Required"),
    passportNumber: Yup.string().required("Required"),
    passportExpiration: Yup.string().required("Required"),
    passportCountry: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
    zip: Yup.string().required("Required"),

    visaType: Yup.string().required("Required"),
    visaDate: Yup.string().required("Required"),
  });
  const onSubmit = (values: VisaValues) => {
    console.log(values);
  };
  const navigate = useNavigate();
  return (
    <div className="visa-application-container">
      <Header />
      <div className="visa-application-form-container">
        <h1>Visa Application</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form>
            <div className="inputs-container">
              <div className="several-fields-container">
                <div className="form-control">
                  <label htmlFor="firstName">First Name</label>
                  <Field
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    className="first-name-field input-field"
                  />
                  <ErrorMessage name="firstName" component={TextError} />
                </div>
                <div className="form-control">
                  <label htmlFor="lastName">Last Name</label>
                  <Field
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    className="last-name-field input-field"
                  />
                  <ErrorMessage name="lastName" component={TextError} />
                </div>
              </div>
              <div className="several-fields-container">
                <div className="form-control">
                  <label htmlFor="email">Email</label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="email-field input-field"
                  />
                  <ErrorMessage name="email" component={TextError} />
                </div>
                <div className="form-control">
                  <label htmlFor="phone">Phone</label>
                  <Field
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="Phone"
                    className="phone-field input-field"
                  />
                  <ErrorMessage name="phone" component={TextError} />
                </div>
              </div>

              <div className="form-control">
                <label htmlFor="passportNumber">Passport Number</label>
                <Field
                  id="passportNumber"
                  name="passportNumber"
                  type="text"
                  placeholder="Passport Number"
                  className="passport-number-field input-field"
                />
                <ErrorMessage name="passportNumber" component={TextError} />
              </div>
              <div className="several-fields-container">
                <div className="form-control">
                  <label htmlFor="passportExpiration">
                    Passport Expiration
                  </label>
                  <Field
                    id="passportExpiration"
                    name="passportExpiration"
                    type="text"
                    placeholder="Passport Expiration"
                    className="passport-expiration-field input-field"
                  />
                  <ErrorMessage
                    name="passportExpiration"
                    component={TextError}
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="passportCountry">Country of issue</label>
                  <Field
                    id="passportCountry"
                    name="passportCountry"
                    type="text"
                    placeholder="Country of issue"
                    className="passport-country-field input-field"
                  />
                  <ErrorMessage name="passportCountry" component={TextError} />
                </div>
              </div>
              <div className="address-container">
                <div className="form-control">
                  <label htmlFor="address">Address</label>
                  <Field
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Address"
                    className="address-field input-field"
                  />
                  <ErrorMessage name="address" component={TextError} />
                </div>
              </div>
              <div className="several-fields-container">
                <div className="form-control">
                  <label htmlFor="country">Country</label>
                  <Field
                    id="country"
                    name="country"
                    type="text"
                    placeholder="Country"
                    className="country-field input-field"
                  />
                  <ErrorMessage name="country" component={TextError} />
                </div>
                <div className="form-control">
                  <label htmlFor="city">City</label>
                  <Field
                    id="city"
                    name="city"
                    type="text"
                    placeholder="City"
                    className="city-field input-field"
                  />
                  <ErrorMessage name="city" component={TextError} />
                </div>

                <div className="form-control">
                  <label htmlFor="zip">Zip</label>
                  <Field
                    id="zip"
                    name="zip"
                    type="text"
                    placeholder="Zip"
                    className="zip-field input-field"
                  />
                  <ErrorMessage name="zip" component={TextError} />
                </div>
              </div>
              <div className="several-fields-container">
                <div className="form-control">
                  <label htmlFor="visaDate">Visa valid from</label>
                  <Field
                    id="visaDate"
                    name="visaDate"
                    type="text"
                    placeholder="Visa valid from"
                    className="visa-date-field input-field"
                  />
                  <ErrorMessage name="visaDate" component={TextError} />
                </div>
                <div className="form-control">
                  <label htmlFor="visaType">Visa Type</label>
                  <select className="input-field" name="visaType" id="visaType">
                    <option value="C Tourist">C Tourist</option>
                    <option value="C Transit">C Transit</option>
                    <option value="D Business">D Business</option>
                    <option value="D Student">D Student</option>
                    <option value="D Work">D Work</option>
                    <option value="D Refugee">D Transit</option>
                  </select>
                </div>
                <div className="form-control">
                  <label htmlFor="visaDuration">Visa Duration</label>
                  <select
                    className="input-field"
                    name="visaDuration"
                    id="visaDuration"
                  >
                    <option value="1 Month">1 Month</option>
                    <option value="3 Months">3 Months</option>
                    <option value="6 Months">6 Months</option>
                    <option value="1 Year">1 Year</option>
                    <option value="2 Years">2 Years</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="buttons-container">
              <button type="submit" className="submit-button">
                Submit
              </button>
              <button
                type="reset"
                className="cancel-button"
                onClick={() => {
                  navigate("/dashboard");
                }}
              >
                Cancel
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default VisaApplication;
