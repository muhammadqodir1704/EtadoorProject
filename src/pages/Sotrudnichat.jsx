import React from "react";
import Frame1 from "../assets/Frame1.png";
import Frame2 from "../assets/Frame2.png";
import Frame3 from "../assets/Frame3.png";
import Frame4 from "../assets/Frame4.png";
import Frame5 from "../assets/Frame5.png";
import Frame6 from "../assets/Frame6.png";
import Frame7 from "../assets/Frame7.png";
import Dverxiy from "../components/Dverxiy";
import { Link } from "react-router-dom";
import EtadoorImg from "../components/EtadoorImg";

const Sotrudnichat = () => {
  const items = [
    { img: Frame1, text: "Большой склад  готовой продукции" },
    { img: Frame2, text: "Широкий ассортимент продукции" },
    { img: Frame3, text: "Весь товар сертифицирован" },
    { img: Frame4, text: "Доставка по всей территории РФ" },
  ];
  const items2 = [
    { img: Frame5, text: "Большой склад готовой продукции" },
    { img: Frame6, text: "Большой склад готовой продукции" },
    { img: Frame7, text: "Большой склад готовой продукции" },
  ];

  return (
    <>
      <div className="container p-6 mx-auto">
        <div>
          <Link to={"/"}>Главная</Link> /{" "}
          <Link to={"/sotrudnichat"} className="text-stone-500">
            Сотрудничать
          </Link>
        </div>
        <h1 className="m-3 mb-10 text-2xl font-bold text-black md:text-4xl">
          Сотрудничать
        </h1>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 p-6 transition-shadow duration-300 cursor-pointer">
              <img
                src={item.img}
                alt=""
                className="w-20 h-20 duration-200 ease-in hover:scale-105"
              />
              <p className="text-lg text-center text-black md:text-xl w-[200px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 pl-64 sm:grid-cols-2 lg:grid-cols-4 ">
          {items2.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 p-6 transition-shadow duration-300">
              <img
                src={item.img}
                alt=""
                className="w-20 h-20 duration-200 ease-in hover:scale-105"
              />
              <p className="text-lg text-center text-black md:text-xl w-[200px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        {/* Dverxi img */}
      </div>
      <EtadoorImg />
      <Dverxiy />
    </>
  );
};

export default Sotrudnichat;
