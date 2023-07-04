import React, { useEffect } from "react";
import styles from "../style";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { restaurantfood } from "../assets";
const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="bg-primary">
      <div
        className={`${styles.paddingX} ${styles.paddingY} flex flex-col sm:flex-row justify-between items-center`}
      >
        <div className={`w-[400px] text-center sm:text-left mb-8 sm:mb-0`}>
          <h1 className={`${styles.heading1} text-secondary`}>Little lemon</h1>
          <h2 className={`${styles.heading2} text-[40px] text-white mb-10`}>
            chikago
          </h2>
          <p className={`${styles.paragraph} text-white mb-6`}>
            Lorem ipsum dolor sit amet consectetur Sed faucibus lorem diam non
            blandit Ultricies eleifend est sapien non egestas.{" "}
          </p>
          <Button handleClick={() => navigate("/booking")}>
            Reserve a table
          </Button>
        </div>
        <div className="overflow-hidden">
          <img
            src={restaurantfood}
            alt="restaurant food"
            className="w-[300px] h-[300px] rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
