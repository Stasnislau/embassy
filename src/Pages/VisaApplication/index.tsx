import "./index.scss";

import * as Yup from "yup";

import { ErrorMessage, Field, Form, Formik } from "formik";

import React from "react";
import TextError from "../../Components/TextError";
import { useState } from "react";

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
  return(
  <div className="visa-application">
    
    
  </div>
  )
};

export default VisaApplication;