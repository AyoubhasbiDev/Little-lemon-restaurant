import React from "react";
import styles from "../style";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import useSubmit from "../hooks/useSubmit";
import Swal from "sweetalert2";
import { paypal, google_pay, apple_pay } from "../assets";

const PaymentForm = () => {
  const navigate = useNavigate();
  const { response, submit } = useSubmit();
  const formik = useFormik({
    initialValues: {
      cardholder: "",
      cardnumber: "",
      expirydate: "",
      cvv: "",
    },
    validationSchema: Yup.object().shape({
      cardholder: Yup.string().required("Required"),
      cardnumber: Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(16, "Must be exactly 16 digits")
        .max(16, "Must be exactly 16 digit")
        .required("Required"),
      expirydate: Yup.date().required("Required"),
      cvv: Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(3, "Must be exactly 3 digits")
        .max(3, "Must be exactly 3 digit")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      const data = JSON.parse(localStorage["user-info"]);
      submit("/", data)
        .then(() =>
          Swal.fire({
            text: `${response.message}`,
            icon: `${response.type}`,
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ok",
          })
        )
        .then((result) => {
          if (result.isConfirmed) {
            navigate("/");
          }
        });
    },
  });

  const { touched, errors, values, handleBlur, handleSubmit, handleChange } =
    formik;

  return (
    <section>
      <div className={`${styles.paddingX} py-6`}>
        <h1 className={`${styles.heading1} text-center`}>Payment methods</h1>
        <div className="mt-[40px] flex  flex-col sm:flex-row-reverse justify-between items-center sm:items-start">
          <div className="w-full xs:w-[300px] h-[300px] mb-10 sm:mb-0 box-shadow rounded-xl">
            <div className="bg-tertiary rounded-t-xl">
              <h4 className="font-poppins py-4 text-center font-semibold">
                Your subtotal
              </h4>
            </div>
            <div className="p-5 mb-2">
              <p className="font-poppins mb-4 ">subtotal: $09,99</p>
              <hr className="mb-4 bg-tertiary h-[1px]" />
              <p className="font-poppins bg-secondary w-[120px] py-2 text-center rounded-lg mx-auto cursor-pointer">
                Save items
              </p>
            </div>
            <div className="px-5">
              <p className="font-poppins">Promo code:</p>
              <div className="flex items-baseline">
                <input
                  type="text"
                  className="w-full outline-none bg-tertiary rounded-s-lg  px-2 py-3 font-poppins mt-2"
                  placeholder="Enter promo code"
                />
                <button className="bg-secondary p-3 rounded-e-lg font-poppins">
                  add
                </button>
              </div>
            </div>
          </div>
          <div className="w-full box-shadow  sm:w-[47%] px-6 py-8 rounded-2xl">
            <div className="flex justify-between items-center mb-[30px]">
              <div className="w-[30%] h-[70px] flex justify-center items-center bg-tertiary rounded-xl">
                <img src={paypal} alt="" className="w-[75px] leading-3" />
              </div>
              <div className="w-[30%] h-[70px] flex justify-center items-center bg-tertiary rounded-xl">
                <img src={google_pay} alt="" className="w-[45px]" />
              </div>
              <div className="w-[30%] h-[70px] flex justify-center items-center bg-tertiary rounded-xl">
                <img src={apple_pay} alt="" className="w-[45px]" />
              </div>
            </div>
            <div className="flex items-center gap-4 mb-[30px]">
              <hr className="bg-tertiary w-[100%] h-[1px]" />
              <p className="font-poppins break-keep whitespace-nowrap text-sm text-[#999]">
                or pay using credit card
              </p>
              <hr className="bg-tertiary w-[100%] h-[1px]" />
            </div>
            <form
              className="w-full"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <div className="mb-4">
                <label
                  htmlFor="cardholder"
                  className="font-poppins text-[#444] font-medium"
                >
                  Card holder full name:
                </label>
                <input
                  name="cardholder"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full outline-none bg-tertiary rounded-lg px-2 py-3 font-poppins mt-2"
                  id="cardholder"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.cardholder}
                />
                {touched.cardholder && errors.cardholder ? (
                  <div className="font-poppins text-red-500 text-sm">
                    {errors.cardholder}
                  </div>
                ) : null}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="cardnumber"
                  className="font-poppins text-[#444] font-medium"
                >
                  Card number:
                </label>
                <input
                  name="cardnumber"
                  type="text"
                  placeholder="0000 0000 0000 0000"
                  className="w-full outline-none bg-tertiary rounded-lg px-2 py-3 font-poppins mt-2"
                  id="cardnumber"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.cardnumber}
                />
                {touched.cardnumber && errors.cardnumber ? (
                  <div className="font-poppins text-red-500 text-sm">
                    {errors.cardnumber}
                  </div>
                ) : null}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="expirydate"
                  className="font-poppins text-[#444] font-medium"
                >
                  Expiry date:
                </label>
                <input
                  name="expirydate"
                  type="month"
                  className="w-full outline-none bg-tertiary rounded-lg px-2 py-3 font-poppins mt-2"
                  id="expirydate"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.expirydate}
                />
                {touched.expirydate && errors.expirydate ? (
                  <div className="font-poppins text-red-500 text-sm">
                    {errors.expirydate}
                  </div>
                ) : null}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="cvv"
                  className="font-poppins text-[#444] font-medium"
                >
                  Cvv:
                </label>
                <input
                  name="cvv"
                  type="text"
                  placeholder="cvv"
                  className="w-full outline-none bg-tertiary rounded-lg px-2 py-3 font-poppins mt-2"
                  id="cvv"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.cvv}
                />
                {touched.cvv && errors.cvv ? (
                  <div className="font-poppins text-red-500 text-sm">
                    {errors.cvv}
                  </div>
                ) : null}
              </div>

              <button
                type="submit"
                className="bg-secondary w-full font-poppins py-2 px-6 font-semibold mt-6"
              >
                Checkout
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentForm;
