import React from "react";
import vk from "./../images/vk.png";
import tg from "./../images/tg.png";
import styles from "./Footer.module.css";

const Footer = () => {
  const navs = [
    { title: "главная" },
    { title: "услуги и цены" },
    { title: "акции и скидки" },
    { title: "афиша" },
    { title: "контакты" },
  ];

  const rules = [
    { title: "Правила индивидуального посещения" },
    { title: "Правила группового пользования" },
    { title: "Правила конфиденциальности" },
  ];

  return (
    <div className="w-full">
      <div className={styles.line}></div>
      <div className="container mx-auto text-white flex flex-row justify-between h-60 items-center">
        <div>
          <div className={styles.name}>IT PLANET</div>
          <div className="text-sm">
            Здесь каждый становится создателем своего будущего
          </div>
        </div>
        <div>
          <ul>
            {navs.map((nav) => (
              <li className="uppercase text-sm font-bold leading-9 text-left">
                {nav.title}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            {rules.map((rule) => (
              <li className="leading-10 text-left">{rule.title}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex flex-row">
            <img
              className="w-16 h-16 p-px mx-2 my-5 rounded-full"
              src={vk}
              alt="vk"
            />
            <img className="w-16 h-16 mx-2 my-5" src={tg} alt="tg" />
          </div>
          <div className="font-bold text-lg">+7 999 999-99-99</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
