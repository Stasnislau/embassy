import React from "react";
import "./index.scss";
import { Formik, Form, Field } from "formik";
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

  return (
    <div className="forgot-password-container">
      <Formik
        initialValues={{
          name: "",
          surname: "",
          email: "",
          newPassword: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <Field type="text" name="name" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="surname">Surname:</label>
              <Field type="text" name="surname" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <Field type="email" name="email" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="newPassword">New Password:</label>
              <Field
                type="password"
                name="newPassword"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <Field
                type="password"
                name="confirmPassword"
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Reset Password
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ForgotPassword;
