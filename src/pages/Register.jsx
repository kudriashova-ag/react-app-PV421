import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import styles from "./Register.module.css";



const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegisterSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short").required(),
  email: Yup.string().email().required(),
  password: Yup.string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      "Too Weak"
    )
    .required(),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required(),
});

const Register = () => {
  const submitHandler = (values) => {
    console.log(values);
  };

  return (
    <div>
      <h1 className={styles.title}>Register</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={RegisterSchema}
      >
        {() => (
          <Form>
            <div>
              <Field name="name" placeholder="Name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div>
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div>
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <div>
              <Field
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="error"
              />
            </div>
            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
