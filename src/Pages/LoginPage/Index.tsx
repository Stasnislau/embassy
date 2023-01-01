import { useFormik } from "formik";
import React from "react";

const LoginPage = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = (values: any) => {
    // TODO: Add type and add functionality to this function
    console.log("Form data", values);
  };
  const validate = (values: any) => {};
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
    });
  return (
    <div className="login-page-container">
      <div className="login-form-container">
        {" "}
        <form onSubmit={formik.handleSubmit}>
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    placeholder="example@gmail.com"
                />
                {formik.touched.email && formik.errors.email ? (
                    <div className="error">{formik.errors.email}</div>
                ) : null}
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    placeholder="********"
                />
                {formik.touched.password && formik.errors.password ? (
                    <div className="error">{formik.errors.password}</div>
                ) : null}
            </div>
            <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;