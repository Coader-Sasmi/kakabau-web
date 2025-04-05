"use client"; 

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const MyForm = () => {

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });


  const initialValues = {
    name: "",
    email: "",
    password: "",
  };


  const onSubmit = (values:any, { setSubmitting, resetForm }:any) => {
    console.log("Form Data:", values);
    setSubmitting(false);
    resetForm();
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold text-center mb-4">Simple Form</h2>

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            
            <div>
              <label className="block font-medium">Name</label>
              <Field type="text" name="name" className="w-full border p-2 rounded" />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
            </div>
          
            <div>
              <label className="block font-medium">Email</label>
              <Field type="email" name="email" className="w-full border p-2 rounded" />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label className="block font-medium">Password</label>
              <Field type="password" name="password" className="w-full border p-2 rounded" />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MyForm;
