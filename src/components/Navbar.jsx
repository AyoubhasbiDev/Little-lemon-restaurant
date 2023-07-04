import React, { useState } from "react";
import styles from "../style";
import { logo, close, menu, Basket } from "../assets";
import { navItems } from "../constants/appData";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  return (
    <header className={`${styles.flexCenter} bg-tertiary`}>
      <div className={`${styles.paddingX} ${styles.boxWidth} py-8`}>
        <nav className="flex justify-between items-center relative">
          <div className={`sm:hidden flex`}>
            <img
              src={`${!toggle ? menu : close}`}
              alt=""
              className="w-[32px]"
              onClick={() => setToggle(!toggle)}
            />
          </div>
          <img src={logo} alt="logo" className="w-[180px]" />
          <ul className="sm:flex hidden">
            {navItems.map((item, index) => (
              <li
                key={item.id}
                className={`${
                  index === navItems.length - 1 ? "mr-0" : "mr-10"
                } ${
                  active === item.title
                    ? "font-normal text-black"
                    : "text-[#444]"
                } font-poppins font-light `}
                onClick={() => setActive(item.title)}
              >
                <a href={`#${item.id}`}>{item.title}</a>
              </li>
            ))}
          </ul>
          <div className={`sm:hidden flex`}>
            <img src={Basket} alt="" className="w-[32px]" />
          </div>
          <ul
            className={`${
              toggle ? "flex" : "hidden"
            } flex flex-col sm:hidden absolute top-12 left-0 px-10 py-7 rounded-lg bg-tertiary sidebar`}
          >
            {navItems.map((item, index) => (
              <li
                key={item.id}
                className={`${
                  index === navItems.length - 1 ? "mb-0" : "mb-4"
                } ${
                  active === item.title
                    ? "font-normal text-black"
                    : "text-[#444]"
                } font-poppins font-light `}
                onClick={() => setActive(item.title)}
              >
                <a href={`#${item.id}`}>{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
