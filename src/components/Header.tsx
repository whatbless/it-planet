import React from "react";
import logo from "./../images/logotip.png";
import vk from "./../images/vk.png";
import tg from "./../images/tg.png";

const Header = () => {
  const navs = [
    { title: "главная" },
    { title: "услуги и цены" },
    { title: "акции и скидки" },
    { title: "афиша" },
    { title: "контакты" },
  ];
  return (
    <div className="bg-black text-white py-4">
      <div className="container mx-auto flex flex-row">
        <div className="flex-none">
          <img src={logo}></img>
        </div>
        <div className="navigation flex flex-row grow">
          {navs.map((nav) => (
            <h1 className="mx-12 p-1 my-6 uppercase cursor-pointer font-bold">
              {nav.title}
            </h1>
          ))}
        </div>
        <div className="socials flex flex-row grow">
          <img className="w-9 h-9 p-px mx-2 my-5 rounded-full" src={vk}></img>
          <img className="w-9 h-9 mx-2 my-5" src={tg}></img>
        </div>
        <div className="number flex flex-none items-center">
          <div className="text-white font-bold">+7 999 999-99-99</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
