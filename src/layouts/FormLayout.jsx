import React from "react";
import { logo, Basket } from "../assets";
import styles from "../style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, Outlet } from "react-router-dom";

const FormLayout = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className={`${styles.flexCenter} bg-tertiary`}>
        <div className={`${styles.paddingX} ${styles.boxWidth} py-8`}>
          <div className="flex justify-between items-center">
            <button
              className="flex justify-center items-center bg-primary w-[50px] h-[50px] rounded-full"
              onClick={() => navigate(-1)}
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="text-white text-[30px]"
              />
            </button>
            <img src={logo} alt="logo" className="w-[180px]" />
            <img src={Basket} alt="" className="w-[32px]" />
          </div>
        </div>
      </header>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

export default FormLayout;
