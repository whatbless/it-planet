import React from "react";
import firstImage from "./../images/1image.png";
import secondImage from "./../images/2image.png";
import thirdImage from "./../images/3image.png";
import styles from "./SecondComponent.module.css";

const SecondComponent = () => {
  const blocks = [
    { title: "Афиша мероприятий", img: firstImage },
    { title: "Что есть в интерактивном центре?", img: secondImage },
    { title: "Акции", img: thirdImage },
  ];

  return (
    <div className="container mx-auto text-white">
      <h1 className="font-bold py-32 text-5xl uppercase">
        Совершайте открытия!
      </h1>
      <div className="flex flex-row justify-between">
        {blocks.map((block) => (
          <div className={styles.block}>
            <img src={block.img} alt="here will be key"></img>
            <p className="text-center font-bold text-2xl py-5">{block.title}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-between">
        <div className={styles.block}>
          <button className={styles.blockButton}>Подробнее</button>
        </div>
        <div className={styles.block}>
          <button className={styles.blockButton}>Подробнее</button>
        </div>
        <div className={styles.block}>
          <button className={styles.blockButton}>Подробнее</button>
        </div>
      </div>
    </div>
  );
};

export default SecondComponent;
