import React, { useState } from "react";
import styles from "./Crew.module.css";
import Control from "../Control/Control";
import data from "../../data.json";

import douglasWebp from "../../assets/crew/image-douglas-hurley.webp";
import douglasPng from "../../assets/crew/image-douglas-hurley.png";
import anoushehWebp from "../../assets/crew/image-anousheh-ansari.webp";
import anoushehPng from "../../assets/crew/image-anousheh-ansari.png";
import markWebp from "../../assets/crew/image-mark-shuttleworth.webp";
import markPng from "../../assets/crew/image-mark-shuttleworth.png";
import victorWebp from "../../assets/crew/image-victor-glover.webp";
import victorPng from "../../assets/crew/image-victor-glover.png";

const images = {
  "Douglas Hurley": { webp: douglasWebp, png: douglasPng },
  "Anousheh Ansari": { webp: anoushehWebp, png: anoushehPng },
  "Mark Shuttleworth": { webp: markWebp, png: markPng },
  "Victor Glover": { webp: victorWebp, png: victorPng },
};

function Crew({ setActiveComponent }) {
  const [selectedCrew, setSelectedCrew] = useState(data.crew[0]);

  const handleCrewClick = (crew) => {
    setSelectedCrew(crew);
  };

  return (
    <div className={styles.background}>
      <Control setActiveComponent={setActiveComponent} />
      <div className={styles.content}>
        <div className={styles.topic}>
          <h3 className={styles.topicNumber}>02</h3>
          <h3 style={{ color: "white" }}>MEET YOUR CREW</h3>
        </div>
        <div className={styles.textnpic}>
          <div className={styles.pic}>
            {selectedCrew && (
              <picture>
                <source
                  srcSet={images[selectedCrew.name].webp}
                  type="image/webp"
                />
                <img
                  alt={selectedCrew.name}
                  src={images[selectedCrew.name].png}
                />
              </picture>
            )}
          </div>
          <div className={styles.text}>
            <div className={styles.bubbles}>
              <ul className={styles.list}>
                {data.crew.map((crew) => (
                  <li
                    className={
                      selectedCrew.name === crew.name ? styles.selected : ""
                    }
                    key={crew.name}
                    onClick={() => handleCrewClick(crew)}
                  ></li>
                ))}
              </ul>
            </div>
            <div className={styles.info}>
              {selectedCrew && (
                <>
                  <h4>{selectedCrew.role.toUpperCase()}</h4>
                  <h1>{selectedCrew.name.toUpperCase()}</h1>
                  <p>{selectedCrew.bio}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crew;
