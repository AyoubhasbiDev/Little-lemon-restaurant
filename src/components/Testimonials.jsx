import React from "react";
import styles from "../style";
import { TestimonialCard } from "./Card";
import { testimonialItems } from "../constants/appData";

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-primary">
      <div className={`${styles.paddingX} ${styles.paddingY}`}>
        <h1 className={`${styles.heading1} text-secondary mb-[40px]`}>
          Testimonials
        </h1>
        <div className="flex justify-center gap-[65px] items-center flex-wrap">
          {testimonialItems.map((item, index) => (
            <TestimonialCard
              key={item.id}
              name={item.name}
              comment={item.comment}
              image={item.getImageSrc}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
