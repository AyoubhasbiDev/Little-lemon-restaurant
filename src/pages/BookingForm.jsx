import React from "react";
import styles from "../style";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { restaurant } from "../assets";

const BookingForm = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      phone: "",
      time: "",
      date: "",
      guest: "",
      occasion: "",
    },
    validationSchema: Yup.object().shape({
      fullname: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      phone: Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(10, "Must be exactly 10 digits")
        .max(10, "Must be exactly 10 digits"),
      date: Yup.date().required("Required"),
      guest: Yup.number().required("Required"),
    }),
    onSubmit: (values) => {
      localStorage.setItem("user-info", JSON.stringify(values));
      navigate("/booking/payment");
    },
  });

  const { touched, errors, values, handleBlur, handleSubmit, handleChange } =
    formik;

  return (
    <section>
      <div className={`${styles.paddingX} py-6`}>
        <h1 className={`${styles.heading1} text-center`}>Reservation</h1>
        <div className="mt-[40px] flex flex-col sm:flex-row justify-between">
          <img
            src={restaurant}
            className="w-full h-[300px] sm:h-auto sm:w-[47%] mb-8 sm:mb-0"
          />
          <form
            className="w-full sm:w-[47%]"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div className="mb-4">
              <label
                htmlFor="fullname"
                className="font-poppins text-[#444] font-medium"
              >
                Full name:
              </label>
              <input
                name="fullname"
                type="text"
                className="w-full outline-none border-b-2 border-primary p-2 font-poppins focus:border-secondary"
                id="fullname"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fullname}
              />
              {touched.fullname && errors.fullname ? (
                <div className="font-poppins text-red-500 text-sm">
                  {errors.fullname}
                </div>
              ) : null}
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="font-poppins text-[#444] font-medium"
              >
                Email:
              </label>
              <input
                name="email"
                type="email"
                className="w-full outline-none border-b-2 border-primary p-2 font-poppins focus:border-secondary"
                id="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {touched.email && errors.email ? (
                <div className="font-poppins text-red-500 text-sm">
                  {errors.email}
                </div>
              ) : null}
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="font-poppins text-[#444] font-medium"
              >
                Phone number:
              </label>
              <input
                name="phone"
                type="text"
                className="w-full outline-none border-b-2 border-primary p-2 font-poppins focus:border-secondary"
                id="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
              />
              {touched.phone && errors.phone ? (
                <div className="font-poppins text-red-500 text-sm">
                  {errors.phone}
                </div>
              ) : null}
            </div>
            <div className="mb-4">
              <label
                htmlFor="time"
                className="font-poppins text-[#444] font-medium"
              >
                Time:
              </label>
              <select
                name="time"
                id="time"
                className="w-full outline-none border-b-2 border-primary p-2 font-poppins focus:border-secondary"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.time}
              >
                <option value="17:00">17:00</option>
                <option value="17:30">17:30</option>
                <option value="18:00">18:00</option>
                <option value="18:30">18:30</option>
                <option value="19:00">19:00</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="date"
                className="font-poppins text-[#444] font-medium"
              >
                Date:
              </label>
              <input
                name="date"
                type="date"
                className="w-full outline-none border-b-2 border-primary p-2 font-poppins focus:border-secondary"
                id="date"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.date}
              />
              {touched.date && errors.date ? (
                <div className="font-poppins text-red-500 text-sm">
                  {errors.date}
                </div>
              ) : null}
            </div>
            <div className="mb-4">
              <label
                htmlFor="guest"
                className="font-poppins text-[#444] font-medium"
              >
                Number of guests:
              </label>
              <input
                name="guest"
                type="number"
                className="w-full outline-none border-b-2 border-primary p-2 font-poppins focus:border-secondary"
                id="guest"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.guest}
              />
              {touched.guest && errors.guest ? (
                <div className="font-poppins text-red-500 text-sm">
                  {errors.guest}
                </div>
              ) : null}
            </div>
            <div className="mb-4">
              <label
                htmlFor="occasion"
                className="font-poppins text-[#444] font-medium"
              >
                Occasion:
              </label>
              <select
                name="occasion"
                id="occasion"
                className="w-full outline-none border-b-2 border-primary p-2 font-poppins focus:border-secondary"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.occasion}
              >
                <option value="BirthDay">BirthDay</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Engagement">Engagement</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-secondary font-poppins py-2 px-6 font-semibold mt-6"
            >
              Let's go
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
