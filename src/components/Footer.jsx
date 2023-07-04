import React from "react";
import styles from "../style";
import { logo } from "../assets";
import { navItems, contactItems, socialMediaItems } from "../constants/appData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => (
  <footer id="contact" className="bg-tertiary">
    <div className={`${styles.paddingX} ${styles.paddingY}`}>
      <div className="flex justify-between flex-wrap">
        <div className="mb-[50px] sm:mb-0">
          <img src={logo} />
        </div>
        <div className="flex flex-col mb-[50px] sm:mb-0">
          <h4 className="text-poppind font-bold text-xl w-[130px] mb-2">
            Doormat navigation
          </h4>
          {navItems.map((item, index) => (
            <a
              key={item.id}
              className={`${index === navItems.length - 1 ? "mb-0" : "mb-2"}`}
              href={`#${item.id}`}
            >
              {item.title}
            </a>
          ))}
        </div>
        <div className="flex flex-col">
          <h4 className="text-poppind font-bold text-xl w-[130px] mb-2">
            Contact
          </h4>
          {contactItems.map((item, index) => (
            <a
              key={item.id}
              className={`${
                index === contactItems.length - 1 ? "mb-0" : "mb-2"
              }`}
              href={item.url}
            >
              {item.title}
            </a>
          ))}
        </div>
        <div className="flex flex-col">
          <h4 className="text-poppind font-bold text-xl w-[130px] mb-2">
            Social Media
          </h4>
          {socialMediaItems.map((item, index) => (
            <a
              key={item.id}
              className={`${index === navItems.length - 1 ? "mb-0" : "mb-2"}`}
              href={item.url}
            >
              <FontAwesomeIcon icon={item.icon} />
              <span className="ml-2">{item.title}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
