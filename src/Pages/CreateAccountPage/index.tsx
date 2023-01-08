import React from "react";
import "./index.css";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextError from "../../Components/TextError";
import * as Yup from "yup";

interface values {
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const CreateAccount = () => {
  const initialValues = {
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const onSubmit = (values: values) => {
    if (values.password === values.confirmPassword) {
      setPasswordsMatch(0);
      // TODO: Add type and add functionality to this function
    } else {
      setPasswordsMatch(1);
    }
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Required")
      .min(1, "Name is too short")
      .max(20, "Name is too long"),
    surname: Yup.string()
      .required("Required")
      .min(1, "Surname is too short")
      .max(20, "Surname is too long"),
    email: Yup.string().email("Invalid email address").required("Required"),
  });
  const [passwordsMatch, setPasswordsMatch] = useState(0);
  return (
    <div className="create-account-container">
      <div className="create-account-form-container">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form>
            <div className="name-surname-container">
              <div className="form-control">
                <label htmlFor="name">Name</label>
                <Field
                  id="name"
                  name="name"
                  type="text"
                  className="input-field"
                  placeholder="Enter your name"
                />
                <ErrorMessage name="name" component={TextError} />
              </div>
              <div className="form-control">
                <label htmlFor="surname">Surname</label>
                <Field
                  id="surname"
                  name="surname"
                  type="text"
                  className="input-field"
                  placeholder="Enter your surname"
                />
                <ErrorMessage name="surname" component={TextError} />
              </div>
            </div>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                type="text"
                className="input-field"
                placeholder="Enter your email"
              />
              <ErrorMessage name="email" component={TextError} />
            </div>

            <div className="form-control">
              <label htmlFor="password">Password</label>
              <Field
                id="password"
                name="password"
                type="password"
                className="input-field"
                placeholder="Enter your password"
              />
            </div>
            <div className="form-control">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                className="input-field"
                placeholder="Confirm your password"
              />
            </div>
            <div className="buttons-container">
              <button className="submit-button" type="submit">
                Sign Up
              </button>
              <button
                className="back-button"
                type="button"
                onClick={() => {
                  window.location.href = "/login";
                }}
              >
                Back
              </button>
            </div>
          </Form>
        </Formik>
        {passwordsMatch !== 1 ? null : (
          <div className="error-message">Passwords do not match</div>
        )}
      </div>
    </div>
  );
};

export default CreateAccount;
