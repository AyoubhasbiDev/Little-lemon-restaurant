import React from "react";
import { star } from "../assets";

export const MenuCard = ({ borderStyle, title, price, description, image }) => {
  return (
    <>
      <div className="lg:w-[280px] w-[240px] md:block hidden rounded-lg box-shadow">
        <div className="w-full rounded-t-lg overflow-hidden">
          <img src={image} alt="" className="w-full h-[200px]" />
        </div>
        <div className="p-5">
          <div className="flex justify-between items-center mb-5">
            <h5 className="text-poppins font-semibold text-[18px]">{title}</h5>
            <p className="text-poppins font-semibold text-[18px] text-secondary">
              {price}
            </p>
          </div>
          <p className="text-poppins mb-5">{description}</p>
          <button className="bg-secondary px-4 py-2 rounded-lg">
            Order a delivery
          </button>
        </div>
      </div>

      <div
        className={` w-full md:hidden flex items-center justify-between ${borderStyle}`}
      >
        <div className="p-5 flex justify-between items-center">
          <div className="flex flex-col mb-5">
            <h5 className="text-poppins font-semibold text-[18px] mb-2">
              {title}
            </h5>
            <p className="text-poppins mb-2 text-[15px]">{description}</p>
            <p className="text-poppins font-semibold text-[18px">{price}</p>
          </div>
          <div className="">
            <img src={image} alt="" className="h-[120px] w-[220px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export const TestimonialCard = ({ name, rating, comment, image }) => (
  <div className="w-[100%] ss:w-[40%] md:w-[200px] px-4 py-6 flex flex-col rounded-lg items-center bg-slate-50 box-shadow">
    <p className="text-poppins mb-[40px]">{comment}</p>
    <div className="w-full flex justify-between items-center">
      <div className="flex flex-col justify-start">
        <h5>{name}</h5>
        <div className="flex items-center">
          <p className="">{rating}</p>
          <img src={star} className="w-[20px]" />
        </div>
      </div>
      <img src={image} className="w-[80px] h-[80px] rounded-full" />
    </div>
  </div>
);
