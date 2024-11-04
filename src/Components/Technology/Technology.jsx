import React, { useState } from "react";
import styles from "./Technology.module.css";
import Control from "../Control/Control";
import data from "./../../data.json";

import vehicleLandscape from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import vehiclePortrait from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import capsuleLandscape from "../../assets/technology/image-space-capsule-landscape.jpg";
import capsulePortrait from "../../assets/technology/image-space-capsule-portrait.jpg";
import portLandscape from "../../assets/technology/image-spaceport-landscape.jpg";
import portPortrait from "../../assets/technology/image-spaceport-portrait.jpg";

const images = {
  "Launch vehicle": { landscape: vehicleLandscape, portrait: vehiclePortrait },
  "Space capsule": { landscape: capsuleLandscape, portrait: capsulePortrait },
  Spaceport: { landscape: portLandscape, portrait: portPortrait },
};

function Technology({ setActiveComponent }) {
  const [selectedTechnology, setSelectedTechnology] = useState(
    data.technology[0]
  );

  const handleTechnologyClick = (index) => {
    setSelectedTechnology(data.technology[index]);
  };

  return (
    <div className={styles.background}>
      <Control setActiveComponent={setActiveComponent} />
      <div className={styles.content}>
        <div className={styles.topic}>
          <h3 className={styles.topicNumber}>03</h3>
          <h3 style={{ color: "white" }}>SPACE LAUNCH 101</h3>
        </div>
        <div className={styles.picntext}>
          <div className={styles.pic}>
            {selectedTechnology && (
              <picture>
                <source
                  srcSet={images[selectedTechnology.name].landscape}
                  type="image/jpg"
                />
                <img
                  alt={selectedTechnology.name}
                  src={images[selectedTechnology.name].landscape}
                />
              </picture>
            )}
          </div>

          <div className={styles.text}>
            <div className={styles.numbers}>
              {data.technology.map((tech, index) => (
                <span
                  key={index}
                  className={`${styles.number} ${
                    selectedTechnology.name === tech.name ? styles.selected : ""
                  }`}
                  onClick={() => handleTechnologyClick(index)}
                >
                  {index + 1}
                </span>
              ))}
            </div>

            {selectedTechnology && (
              <>
                <h4>THE TERMINOLOGY...</h4>
                <h1>{selectedTechnology.name.toUpperCase()}</h1>
                <p>{selectedTechnology.description}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology;
