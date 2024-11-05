import React, { useState } from "react";
import styles from "./Destination.module.css";
import Control from "../Control/Control";
import data from "../../data.json";

const images = {
  "image-moon.png": require("../../assets/destination/image-moon.png"),
  "image-moon.webp": require("../../assets/destination/image-moon.webp"),
  "image-mars.png": require("../../assets/destination/image-mars.png"),
  "image-mars.webp": require("../../assets/destination/image-mars.webp"),
  "image-europa.png": require("../../assets/destination/image-europa.png"),
  "image-europa.webp": require("../../assets/destination/image-europa.webp"),
  "image-titan.png": require("../../assets/destination/image-titan.png"),
  "image-titan.webp": require("../../assets/destination/image-titan.webp"),
};

function Destination({ setActiveComponent }) {
  const [selectedDestination, setSelectedDestination] = useState(
    data.destinations[0]
  );

  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination);
  };

  return (
    <div className={styles.background}>
      <Control setActiveComponent={setActiveComponent} />
      <div className={styles.content}>
        <div className={styles.text}>
          <div className={styles.firstText}>
            <div className={styles.topic}>
              <h3 className={styles.topicNumber}>01</h3>
              <h3>PICK YOUR DESTINATION</h3>
            </div>
            <img
              alt={selectedDestination.name}
              src={images[selectedDestination.images.webp]}
            />
          </div>
          <div className={styles.secondText}>
            <ul>
              {data.destinations.map((destination) => (
                <li
                  className={
                    selectedDestination.name === destination.name
                      ? styles.selected
                      : ""
                  }
                  key={destination.name}
                  onClick={() => handleDestinationClick(destination)}
                >
                  {destination.name.toUpperCase()}
                </li>
              ))}
            </ul>
            {selectedDestination && (
              <>
                <h1>{selectedDestination.name.toUpperCase()}</h1>
                <p>{selectedDestination.description}</p>
                <div className={styles.tsw}>
                  <div>
                    <h5>AVG. DISTANCE</h5>
                    <h3>{selectedDestination.distance.toUpperCase()}</h3>
                  </div>
                  <div>
                    <h5>EST. TRAVEL TIME</h5>
                    <h3>{selectedDestination.travel.toUpperCase()}</h3>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
