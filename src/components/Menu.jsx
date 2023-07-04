import React from "react";
import styles from "../style";
import Button from "./Button";
import { MenuCard } from "./Card";
import { menuItems } from "../constants/appData";

const Menu = () => (
  <section id="menu">
    <div className={`${styles.paddingX} ${styles.paddingY}`}>
      <div className="md:flex hidden flex-col">
        <div className="flex justify-between items-center mb-12">
          <h1 className={`${styles.heading1}`}>This week specials!</h1>
          <Button>Online menu</Button>
        </div>
        <div className="flex flex-row justify-between items-center">
          {menuItems.map((item, index) => {
            return (
              <MenuCard
                key={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                image={item.getImageSrc}
              />
            );
          })}
        </div>
      </div>

      <div className="md:hidden flex  flex-col">
        <div className="flex flex-col mb-12">
          <h1 className={`text-[26px] font-bold mb-6`}>Order FOR DELIVERY!</h1>
          <div className="flex justify-between items-center">
            <p className="text-poppins text-primary font-semibold bg-[#EDEFEE] rounded-full px-6 py-2">
              Lunch
            </p>
            <p className="text-poppins text-primary font-semibold bg-[#EDEFEE] rounded-full px-6 py-2">
              Mains
            </p>
            <p className="text-poppins text-primary font-semibold bg-[#EDEFEE] rounded-full px-6 py-2">
              Desserts
            </p>
            <p className="text-poppins whitespace-nowrap text-primary font-semibold bg-[#EDEFEE] rounded-full px-6 py-2">
              A La Carte
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center">
          {menuItems.map((item, index) => {
            return (
              <MenuCard
                key={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                image={item.getImageSrc}
                borderStyle={`${
                  index === menuItems.length - 1
                    ? "border-b-2 border-t-2"
                    : "border-t-2"
                }`}
              />
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default Menu;
