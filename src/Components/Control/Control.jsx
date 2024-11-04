import React, { useState } from "react";
import styles from "./Control.module.css";
import logo from "../../assets/shared/logo.svg";
import hamburger from "../../assets/shared/icon-hamburger.svg";
import close from "../../assets/shared/icon-close.svg";

function Control({ setActiveComponent }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleMenuItemClick = (component) => {
    setActiveComponent(component);
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.controls}>
      <img className={styles.logo} src={logo} alt="tourism logo" />
      <img
        src={isMenuOpen ? close : hamburger}
        alt={isMenuOpen ? "close icon" : "hamburger icon"}
        onClick={toggleMenu}
        className={styles.icon}
      />

      <div className={`${styles.slideMenu} ${isMenuOpen ? styles.show : ""}`}>
        <div className={styles.controlText}>
          <ul className={styles.numbers}>
            <li onClick={() => handleMenuItemClick("Home")}>00</li>
            <li onClick={() => handleMenuItemClick("Destination")}>01</li>
            <li onClick={() => handleMenuItemClick("Crew")}>02</li>
            <li onClick={() => handleMenuItemClick("Technology")}>03</li>
          </ul>
          <ul>
            <li onClick={() => handleMenuItemClick("Home")}>HOME</li>
            <li onClick={() => handleMenuItemClick("Destination")}>
              DESTINATION
            </li>
            <li onClick={() => handleMenuItemClick("Crew")}>CREW</li>
            <li onClick={() => handleMenuItemClick("Technology")}>
              TECHNOLOGY
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Control;
