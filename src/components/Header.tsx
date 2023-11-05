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
            <h1 className="mx-12 p-1 my-6 uppercase cursor-pointer">
              {nav.title}
            </h1>
          ))}
        </div>
        <div className="socials flex flex-row grow">
          <img className="w-12 h-12 mx-2 my-4 rounded-full" src={vk}></img>
          <img className="w-12 h-12 mx-2 my-4" src={tg}></img>
        </div>
        <div className="number flex flex-none">
          <div className="bg-white px-6 py-2 my-5 mx-5 text-black rounded-xl shadow-neutral-600 shadow-inner-xl">
            +7 999 999-99-99
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
