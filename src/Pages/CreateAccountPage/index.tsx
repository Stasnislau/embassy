import React from "react";
import "./index.css";
import { useState } from "react";
import { useFormik } from "formik";

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
      // TODO: Add type and add functionality to this function
    } else {
      setPasswordsMatch(false);
    }
  };
  const validate = (values: values) => {
    const errors = {};
    if (!values.name) {
      formik.errors.name = "Required";
    }
    if (!values.surname) {
      formik.errors.surname = "Required";
    }
    if (!values.email) {
      formik.errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      formik.errors.email = "Invalid email address";
    }
    return errors;
  };

  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
    validate: validate,
  });
  return (
    <div className="create-account-container">
      <div className="create-account-form-container">
        <form onSubmit={formik.handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              onBlur={formik.handleBlur}
              className="input-field"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.errors.name ? (
              <div className="error-text">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="form-control">
            <label htmlFor="surname">Surname</label>
            <input
              id="surname"
              name="surname"
              type="text"
              className="input-field"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.surname}
            />
            {formik.errors.surname ? (
              <div className="error-text">{formik.errors.surname}</div>
            ) : null}
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="input-field"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          {formik.errors.email ? (
            <div className="error-text">{formik.errors.email}</div>
          ) : null}
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              className="input-field"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
          <div className="form-control">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              className="input-field"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            />
          </div>
          <div className="buttons-container">
            <button className="submit-button" type="submit">
              Sign Up
            </button>
            <button className="back-button" type="button">
              Back
            </button>
          </div>
        </form>
      </div>
      {passwordsMatch ? null : (
        <div className="error-text">Passwords do not match</div>
      )}
    </div>
  );
};

export default CreateAccount;
