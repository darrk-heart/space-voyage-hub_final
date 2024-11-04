import React from "react";
import styles from "./Home.module.css";
import Control from "../Control/Control";

function Home({ setActiveComponent }) {
  return (
    <div className={styles.background}>
      <Control setActiveComponent={setActiveComponent} />
      <div className={styles.content}>
        <div className={styles.text}>
          <div className={styles.firstText}>
            <h3>SO, YOU WANT TO TRAVEL TO</h3>
            <h1>SPACE</h1>
            <p>
              Let's face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we'll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className={styles.secondText}>
            <h1>EXPLORE</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
