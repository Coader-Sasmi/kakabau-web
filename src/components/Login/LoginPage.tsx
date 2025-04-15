"use client";
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function LoginPage() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
      password: Yup.string()
        .required('Password is required'),
    }),
    onSubmit: (values) => {
      console.log('Form submitted:', values);
    },
  });

  return (
    <div className="justify-center items-center text-center w-full h-screen flex">
      <form
        onSubmit={formik.handleSubmit}
        className="justify-center items-center w-[28rem] h-[25rem] shadow-black shadow-md flex flex-col gap-3 rounded-md"
      >
        <div className="text-left w-[20rem]">
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={`w-full border p-2 rounded bg-gray-200 ${
              formik.touched.email && formik.errors.email ? 'border-red-500' : ''
            }`}
            placeholder="Enter Your Email Id"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm">{formik.errors.email}</p>
          )}
        </div>

        <div className="text-left w-[20rem]">
          <label className="block font-medium">Password</label>
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className={`w-full border p-2 rounded bg-gray-200 ${
              formik.touched.password && formik.errors.password ? 'border-red-500' : ''
            }`}
            placeholder="Enter Your Password"
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-red-500 text-sm">{formik.errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          className="p-2 bg-blue-600 text-white w-[20rem] font-semibold rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
