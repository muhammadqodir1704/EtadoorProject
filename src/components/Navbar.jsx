import React, { useState } from "react";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import Logo from "../Images/Frame 3.svg";
import ZaprositModal from "../Modal/ZaprositModal";
import ZakazatZvanok from "../Modal/ZakazatZvanok";
import { BsChatLeftDots } from "react-icons/bs";
import Tooltip from '@mui/material/Tooltip';

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [zakazatZvanok, setZakazatZvanok] = useState(false);

  return (
    <nav className="p-4 bg-transparent">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center justify-center space-x-4">
          <a href="/" className="flex items-center">
            <img style={{ width: 141, height: 130 }} src={Logo} alt="Logo" />
            <p
              style={{ fontWeight: 700, fontSize: 24 }}
              className="ml-4 font-noto-sans-georgian">
              Влагостойкие двери <br /> от производителя
            </p>
          </a>
        </div>
        <ul className="flex space-x-6">
          <li>
            <a href="tel:+74993757765" className="hover:opacity-90">
              <Tooltip title="Позвонить" placement="top">
              <p
                style={{
                  fontFamily: "Noto Sans Georgian",
                  fontWeight: 700,
                  fontSize: 32,
                  color: "#142839",
                }}>
                <span
                  style={{ fontSize: 34, fontWeight: 400 }}
                  className="text-custom-brown">
                  +7 499
                </span>{" "}
                375 77 65
              </p>
              </Tooltip>
            </a>
          </li>

          <div className="flex space-x-2">
            <button
              className="px-4 py-2 text-white rounded-md bg-custom-brown"
              onClick={() => window.open("https://www.whatsapp.com/", "_blank")}>
              <FaWhatsapp style={{ fontSize: 28 }} />
            </button>
            <button
              className="px-4 py-2 text-white rounded-md bg-custom-brown"
              onClick={() => window.open("https://t.me/etadoor_bot", "_blank")}>
              <FaTelegramPlane style={{ fontSize: 28 }} />
            </button>
          </div>
        </ul>
        <div className="flex space-x-4">
          <Tooltip title="Заказать звонок" placement="top">
          <button 
          onClick={() => window.open("https://t.me/etadoor_bot", "_blank")}
          style={{fontSize: 25}} className="px-4 py-2 text-white bg-custom-red hover:bg-custom-brown rounded-s-full transition duration-300 ">
          <BsChatLeftDots />
          </button>
          </Tooltip>
          <Tooltip title="Запросить прайс-лист" placement="top">
          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center px-4 py-2 text-white bg-custom-red hover:bg-custom-brown rounded-e-full">
            <CiViewList style={{ fontSize: 28, marginRight: 10 }} />
            <p className="font-circe" style={{ fontSize: 14, fontWeight: 700 }}>
              Запросить прайс-лист
            </p>
          </button>
          </Tooltip>
        </div>
      </div>
      <hr className="mt-4 border-t-2 border-custom-brown" />
      <ZaprositModal open={modalOpen} handleClose={() => setModalOpen(false)} />
      <ZakazatZvanok
        open={zakazatZvanok}
        handleClose={() => setZakazatZvanok(false)}
      />
    </nav>
  );
};

export default Navbar;
