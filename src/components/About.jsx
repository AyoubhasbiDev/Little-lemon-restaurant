import React from "react";
import styles from "../style";
import { mario_adrian } from "../assets";

const About = () => (
  <section id="about">
    <div className={`${styles.paddingX} ${styles.paddingY} `}>
      <div className="flex flex-col sm:flex-row justify-between items-center w-full">
        <div className="mb-[30px] sm:mb-0">
          <h1 className={`${styles.heading1}`}>Little lemon</h1>
          <h2 className={`${styles.heading2} mb-[40px]`}>Chikago</h2>
          <div className="w-[400px]">
            <p className={`${styles.paragraph}`}>
              Lorem ipsum dolor sit amet consectetur Sed faucibus lorem diam non
              blandit Lorem ipsum dolor sit amet consectetur Sed faucibus lorem
              diam non blandit Ultricies eleifend est sapien non egestas
              Ultricies eleifend est sapien non egestas.{" "}
            </p>
          </div>
        </div>
        <div className="">
          <img src={mario_adrian} alt="" className="w-[330px]" />
        </div>
      </div>
    </div>
  </section>
);

export default About;
