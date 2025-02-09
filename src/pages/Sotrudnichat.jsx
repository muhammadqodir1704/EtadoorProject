import React from "react";
import Frame1 from "../assets/Frame1.png";
import Frame2 from "../assets/Frame2.png";
import Frame3 from "../assets/Frame3.png";
import Frame4 from "../assets/Frame4.png";
import Dverxiy from "../components/Dverxiy";
import { Link } from "react-router-dom";
import EtadoorImg from "../components/EtadoorImg";
import { p } from "framer-motion/client";

const Sotrudnichat = () => {
  const items = [
    {
      img: Frame1,
      text: "Большой склад  готовой продукции",
      path: "/allProducts" 
    },
    {
      img: Frame2,
      text: "Широкий ассортимент продукции",
      path: "/allProducts"
    },
    {
      img: Frame3,
      text: "Весь товар сертифицирован",
      path: "/sertifikati"
    },
    {
      img: Frame4,
      text: "Доставка по всей территории РФ",
      path: "/dostavka" 
    },
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
        <h1 className="m-3 mb-10 text-2xl font-bold text-black md:text-4xl font-noto-sans-georgian">
          Сотрудничать
        </h1>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <Link to={item.path} key={index}>
              <div className="flex flex-col items-center gap-4 p-6 cursor-pointer">
                <img
                  src={item.img}
                  alt=""
                  className="w-20 h-20 duration-200 ease-in hover:scale-105"
                />
                <p className="text-lg text-center text-black md:text-xl w-[200px]">
                  {item.text}
                </p>
              </div>
            </Link>
          ))}

        </div>
      </div>
      <EtadoorImg />
      <Dverxiy />
    </>
  );
};

export default Sotrudnichat;
