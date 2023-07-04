import React from "react";
import styles from "../style";

const Button = ({ children, handleClick }) => {
  return (
    <button
      className={`bg-secondary px-5 py-3 rounded-lg ${styles.paragraph} text-white`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
