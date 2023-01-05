import React from "react";
import "./index.css";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'

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
  // const validate = (values: values) => {
  //   const errors = {};
  //   if (!values.name) {
  //     formik.errors.name = "Required";
  //   }
  //   if (!values.surname) {
  //     formik.errors.surname = "Required";
  //   }
  //   if (!values.email) {
  //     formik.errors.email = "Required";
  //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
  //     formik.errors.email = "Invalid email address";
  //   }
  //   return errors;
  // };
  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    surname: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
  }) 
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  return (
    <div className="create-account-container">
      <div className="create-account-form-container">
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          <Form>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <Field
                id="name"
                name="name"
                type="text"
                className="input-field"
              />
              <ErrorMessage name="name"/>
            </div>
            <div className="form-control">
              <label htmlFor="surname">Surname</label>
              <Field
                id="surname"
                name="surname"
                type="text"
                className="input-field"
              />
              <ErrorMessage name="surname"/>
            </div>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                type="email"
                className="input-field"
              />
            </div>
            <ErrorMessage name="email"/>
            <div className="form-control">
              <label htmlFor="password">Password</label>
              <Field
                id="password"
                name="password"
                type="password"
                className="input-field"
              />
            </div>
            <div className="form-control">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                className="input-field"
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
          </Form>
        </Formik>
      </div>
      {passwordsMatch ? null : (
        <div className="error-text">Passwords do not match</div>
      )}
    </div>
  );
};

export default CreateAccount;
