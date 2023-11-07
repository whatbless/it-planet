import React from "react";
import Training from "./../images/Training.png";
import Exhibition from "./../images/Exhibition.png";
import Event from "./../images/Event.png";
import Vector from "./../images/Vector1.png";
import styles from "./Favors.module.css";

const Favors = () => {
  const blocks = [
    {
      img: Training,
      title: "Профориентационные тренинги",
      hashes: [
        { hash: "vr" },
        { hash: "профориентация" },
        { hash: "it_technologies" },
        { hash: "ai" },
      ],
      desc: "Pretium in nunc tincidunt arcu nulla. A adipiscing id adipiscing elit ultricies porttitor. Convallis tortor laoreet commodo volutpat in posuere. Eget eget vulputate gravida massa pretium diam.",
    },
    {
      img: Exhibition,
      title: "Интерактивные экскурсии",
      hashes: [
        { hash: "профориентация" },
        { hash: "экскурсии" },
        { hash: "it_technologies" },
      ],
      desc: "Pretium in nunc tincidunt arcu nulla. A adipiscing id adipiscing elit ultricies porttitor. Convallis tortor laoreet commodo volutpat in posuere. Eget eget vulputate gravida massa pretium diam.",
    },
    {
      img: Event,
      title: "Тематические мероприятия",
      hashes: [
        { hash: "vr" },
        { hash: "праздники" },
        { hash: "технологии" },
        { hash: "ai" },
      ],
      desc: "Pretium in nunc tincidunt arcu nulla. A adipiscing id adipiscing elit ultricies porttitor. Convallis tortor laoreet commodo volutpat in posuere. Eget eget vulputate gravida massa pretium diam.",
    },
  ];
  return (
    <div className="container mx-auto text-white my-20">
      <div className="relative">
        <div className="my-40 font-bold text-6xl uppercase text-left">
          Услуги и цены
        </div>
        <img className={styles.vector} src={Vector} alt="shadow" />
      </div>
      <div className="flex flex-row justify-between text-left">
        {blocks.map((block) => (
          <div className={styles.block}>
            <div className="px-16 mt-16">
              <div className={styles.img}>
                <img src={block.img} alt="img" />
              </div>
            </div>
            <div className="px-12 my-12 text-2xl font-bold">{block.title}</div>
            <div className="flex flex-row px-12 flex-wrap">
              {block.hashes.map((hash) => (
                <div className={styles.hash}>#{hash.hash}</div>
              ))}
            </div>
            <div className="px-12 my-12 text-lg">{block.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favors;
