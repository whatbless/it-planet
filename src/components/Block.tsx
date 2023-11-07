import React from "react";
import styles from "./Block.module.css";

export type BlockPropsType = {
  title: string;
  desc: string;
  link: string;
};

const Block = (props: BlockPropsType) => {
  return (
    <div className={styles.blockWrap}>
      <div>{props.title}</div>
      <div>{props.desc}</div>
      <button>Это про меня! {"=>"}</button>
    </div>
  );
};

export default Block;
