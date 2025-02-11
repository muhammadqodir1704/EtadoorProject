import React from "react";
import Xarita from "../components/Xarita";
import EtadoorImg from "../components/EtadoorImg";
import { Link } from "react-router-dom";

const GdeKupit = () => {
  return (
    <>
    <div className="container mx-auto p-6 rounded-lg  ">
     <Link to={"/"}>Главная</Link> /{" "}
        <Link to={"/gde-kupit"} className="text-stone-500">
        Где купить
        </Link>
        </div>
      <Xarita/>
      <EtadoorImg />
      <hr className="border-2 border-amber-700 mt-24" />
    </>
  );
};

export default GdeKupit;
