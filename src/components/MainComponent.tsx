import React from "react";
import Component1 from "./Component1";
import styles from "./MainComponent.module.css";
//@ts-ignore
import Slider from "./Slider";

const MainComponent = () => {
  return (
    <div className={styles.container}>
      <div className="container mx-auto">
        <div className="py-40">
          <p className="font-bold text-white text-5xl w-96 text-left">
            Новогодние каникулы в
          </p>
          <p className="font-bold text-8xl text-left text-my-blue pt-5">
            IT-PLANET
          </p>
        </div>
        <div className="items-center justify-center flex pb-32">
          <Slider>
            <div className={styles.item}>Item-1</div>
            <div className={styles.item}>
              <Component1 />
            </div>
            <div className={styles.item}>Item-3</div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
