import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

import Img1 from "../Images/EtadorImgOne.svg";
import Img2 from "../Images/EtadorImgBack.svg";
import Img3 from "../Images/Vector (1).svg";
import Img4 from "../Images/Frame 221.svg";
import Img5 from "../Images/Left1.svg";
import Img6 from "../Images/Left1icon.svg";

import Img7 from "../Images/Group 21.svg";
import Img8 from "../Images/Group 63.svg";

import Img10 from "../Images/Group 62 (1).svg";
import Img11 from "../Images/Group 22 (1).svg";
import Img12 from "../Images/Group 60.svg";

import Img13 from "../Images/RightS1.svg";
import Img14 from "../Images/RightIcon1.svg";
import Img15 from "../Images/Group 46.svg";
import Img16 from "../Images/Group 18.svg";
import Img17 from "../Images/Group 61.svg";
import Img18 from "../Images/Group 29.svg";
import Toltip from "../Images/Path.svg";
const EtadoorImg = () => {
  return (
    <div style={{ backgroundColor: "#F9F9F9", width: "100%", height: "850px" }}>
      <div className="container mx-auto mt-10">
        <div className="flex justify-center items-center flex-col">
          <h4
            className="font-noto-sans-georgian"
            style={{ fontSize: 34, fontWeight: 700, marginTop: 40 }}>
            О дверях «EtaDoor»
          </h4>
          <p
            style={{ fontSize: 20, paddingTop: 30, fontWeight: 400 }}
            className="text-center">
            Влагостойкие композитные двери «EtaDoor» , изготовлены из комбинации
            жесткого ПВХ и компактного древесно-полимерного композита. Эти двери
            обладают целым спектром уникальных свойств, что позволяет их
            использовать в самых экстремальных условиях.
          </p>
        </div>
        <div className="flex justify-center items-center mt-10 relative">
          <img src={Img2} alt="" className="absolute" />
          <img src={Img1} alt="" className="relative z-10" />
          <img src={Img3} alt="" className="absolute mt-40" />
          <img src={Img4} alt="" className="absolute z-10 " />
          <div
            style={{ marginRight: 360 }}
            className=" flex  mb-64 absolute  z-10">
            <img src={Img6} alt="" className="absolute " />
            <img src={Img5} alt="" className="mt-5" />
          </div>
          <div
            style={{ marginRight: 360 }}
            className=" flex mb-16  absolute  z-10">
            <img src={Img8} alt="" className="absolute " />
            <img src={Img7} alt="" className="mt-5" />
          </div>
          <div
            style={{ marginRight: 360 }}
            className=" flex  mt-24 absolute z-10">
            <img src={Img10} alt="" className="absolute mt-5 " />
            <img
              style={{ width: 137.5, height: 36 }}
              src={Img11}
              alt=""
              className="mt-5"
            />
          </div>
          <div
            style={{ marginRight: 360 }}
            className=" flex mt-72 absolute z-10">
            <img src={Img12} alt="" className="absolute mt-5 " />
            <img
              style={{ width: 137.5, height: 36 }}
              src={Img11}
              alt=""
              className="mt-5"
            />
          </div>
        </div>
        <div
          style={{ marginLeft: 380 }}
          className="flex justify-center items-center relative">
          <div style={{ marginTop: -830 }} className="flex absolute z-10">
            <img src={Img13} alt="" className="relative mt-5" />
            <img src={Img14} alt="" className="ml-[-50px] z-10" />
          </div>
          <div style={{ marginTop: -650 }} className="flex absolute z-10">
            <img src={Img13} alt="" className="relative mt-5" />
            <img src={Img15} alt="" className="ml-[-50px] z-10" />
          </div>
          <div style={{ marginTop: -480 }} className="flex absolute z-10">
            <img src={Img16} alt="" className="relative mt-5" />
            <img src={Img17} alt="" className="ml-[-50px] z-10 mt-10" />
          </div>
          <div style={{ marginTop: -280 }} className="flex absolute z-10">
            <img src={Img16} alt="" className="relative mt-5" />
            <img src={Img18} alt="" className="ml-[-50px] z-10 mt-10" />
          </div>
        </div>
        <div
          style={{ marginTop: -400, marginLeft: 300 }}
          className="flex flex-col">
          <p style={{ fontSize: 20 }} className="-mt-10 z-10 -ml-5">
            Высокое сопротивление <br /> теплопередаче
          </p>
          <p style={{ fontSize: 20 }} className="mt-10 -ml-28 z-10">
            Низкая эмиссия вредных веществ
          </p>
          <p style={{ fontSize: 20 }} className="mt-20 ml-16 z-10">
            Долговечность
          </p>
          <p style={{ fontSize: 20 }} className="mt-16 z-10 ml-10">
            Легкость монтажа
          </p>
        </div>
        <div
          style={{ marginTop: -300, marginLeft: 1150 }}
          className="flex flex-col">
          <p style={{ fontSize: 20 }} className="-mt-10 z-10 -ml-28">
            Высокая химическая и бактериологическая стойкость
          </p>
          <p style={{ fontSize: 20 }} className="mt-10 -ml-28 z-10">
            Влагостойкость 100%          </p>
          <p style={{ fontSize: 20 }} className="mt-20  z-10 -ml-28">
            Эффект Лотоса          </p>
          <p style={{ fontSize: 20 }} className="mt-16 z-10 -ml-28">
            Высокая звукоизоляция          </p>
        </div>
      </div>

    </div>
  );
};

export default EtadoorImg;
