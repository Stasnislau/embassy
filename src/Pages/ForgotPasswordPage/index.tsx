import React from "react";
import "./index.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextError from "../../Components/TextError";
import * as Yup from "yup";

const ForgotPassword: React.FC = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    surname: Yup.string().required("Surname is required"),
    email: Yup.string().required("Email is required").email("Invalid email"),
    newPassword: Yup.string()
      .required("New password is required")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
  });

  const handleSubmit = (values: any) => {
    console.log(values);
  };
  const initialValues = {
    name: "",
    surname: "",
    email: "",
    newPassword: "",
    confirmPassword: "",
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-form-container">
        <Formik
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          initialValues={initialValues}
        >
          <Form>
            <h1>Forgot Password</h1>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <Field
                className="input-field"
                id="email"
                name="email"
                type="email"
                placeholder="Email for your account"
              />

              <ErrorMessage name="email" component={TextError} />
            </div>

            <div className="form-control">
              <label htmlFor="name">Name</label>
              <Field
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                className="input-field"
              />
              <ErrorMessage name="name" component={TextError} />
            </div>
            <div className="form-control">
              <label htmlFor="surname">Surname</label>
              <Field
                id="surname"
                name="surname"
                type="text"
                placeholder="Enter your surname"
                className="input-field"
              />
              <ErrorMessage name="surname" component={TextError} />
            </div>
            <div className="form-control">
              <label htmlFor="newPassword">New Password</label>
              <Field
                id="newPassword"
                name="newPassword"
                type="password"
                className="input-field"
                placeholder="Enter your new password"
              />
              <ErrorMessage name="newPassword" component={TextError} />
            </div>
            <div className="form-control">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                className="input-field"
                placeholder="Confirm your new password"
              />
              <ErrorMessage name="confirmPassword" component={TextError} />
            </div>

            <div className="buttons-container">
              <button type="submit" className="submit-button">
                Change Password
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
      </div>
    </div>
  );
};

export default ForgotPassword;
