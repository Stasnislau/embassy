import React from "react";
import { useState } from "react";
import { useFormik } from "formik";

interface values {
    email: string;
    password: string;
    confirmPassword: string;
}
const CreateAccount = () => {
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const initialValues = {
        email: "",
        password: "",
        confirmPassword: "",
    };
    const onSubmit = (values: values) => {
        if (values.password === values.confirmPassword) {
            // TODO: Add type and add functionality to this function
        }
        else {
            setPasswordsMatch(false);
        }
    };

}