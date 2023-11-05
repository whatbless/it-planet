import React, { cloneElement, useEffect, useState } from "react";
import styles from "./Slider.module.css";
import leftArrow from "./../images/leftArrow.png";
import rightArrow from "./../images/rightArrow.png";

const Slider = ({ children }: any) => {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);

  const PAGE_WIDTH = 800;

  useEffect(() => {
    setPages(
      children.map((child: any) => {
        return cloneElement(child, {
          style: {
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`,
          },
        });
      })
    );
  }, []);

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH;
      return newOffset;
    });
  };

  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH;
      return newOffset;
    });
  };

  return (
    <div className={styles.container}>
      <div onClick={handleLeftArrowClick} className={styles.leftArrow}>
        <img src={leftArrow}></img>
      </div>
      <div className={styles.window}>
        <div
          className={styles.allPages}
          style={{ transform: `translateX(${offset}px)` }}
        >
          {pages}
        </div>
      </div>
      <div onClick={handleRightArrowClick} className={styles.rightArrow}>
        <img src={rightArrow}></img>
      </div>
    </div>
  );
};

export default Slider;
