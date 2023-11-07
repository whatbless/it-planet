import React from "react";
import planet from "./../images/planet1.png";
import styles from "./MainComponent.module.css";

const MainComponent = () => {
  return (
    <div className="text-white">
      <div className="flex flex-row my-20">
        <div className={styles.box}>
          <img src={planet} alt="planet" className={styles.img} />
        </div>
        <div className="flex flex-col text-center justify-center items-center w-full">
          <div className={styles.planet}>IT-PLANET</div>
          <div className={styles.desc}>
            Многопрофильный интерактивный музей IT-технологий
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
