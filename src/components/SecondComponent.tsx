import React from "react";
import firstImage from "./../images/1image.png";
import secondImage from "./../images/2image.png";
import thirdImage from "./../images/3image.png";
import styles from "./SecondComponent.module.css";

const SecondComponent = () => {
  return (
    <div className="container mx-auto">
      <h1 className="font-bold py-32 text-5xl uppercase">
        Совершайте открытия!
      </h1>
      <div className="flex flex-row">
        <div className="w-1/4 flex-none">
          <img src={firstImage} alt="here will be key"></img>
          <p className="text-center font-bold text-2xl uppercase py-5">
            Афиша в IT PLANET
          </p>
          <button className={styles.blockButton}>Подробнее</button>
        </div>
        <div className="w-1/4 grow flex flex-col items-center">
          <img src={secondImage} alt="here will be key" />
          <p className="text-center font-bold text-2xl uppercase py-5">
            Для школьных групп
          </p>
          <button className={styles.blockButton}>Подробнее</button>
        </div>
        <div className="w-1/4 flex-none">
          <img src={thirdImage} alt="here will be key" />
          <p className="text-center font-bold text-2xl uppercase py-5">
            День рождения в музее
          </p>
          <button className={styles.blockButton}>Подробнее</button>
        </div>
      </div>
    </div>
  );
};

export default SecondComponent;
