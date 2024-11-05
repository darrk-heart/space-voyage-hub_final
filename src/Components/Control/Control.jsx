import React, { useState } from "react";
import styles from "./Control.module.css";
import logo from "../../assets/shared/logo.svg";
import hamburger from "../../assets/shared/icon-hamburger.svg";
import close from "../../assets/shared/icon-close.svg";

function Control({ setActiveComponent }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Home");

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleMenuItemClick = (component) => {
    setActiveComponent(component);
    setSelectedItem(component);
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
      <div className={styles.tabletViewControl}>
        <div className={styles.line}>.</div>
        <ul className={styles.lists}>
          {["Home", "Destination", "Crew", "Technology"].map((item, index) => (
            <li
              key={item}
              onClick={() => handleMenuItemClick(item)}
              className={`${styles.listItem} ${
                selectedItem === item ? styles.selected : ""
              }`}
            >
              <h4>{`0${index}`}</h4>
              <span>{item.toUpperCase()}</span>
            </li>
          ))}
        </ul>
      </div>

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
