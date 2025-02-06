import React, { useState } from "react";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { CiViewList } from "react-icons/ci";
import Logo from "../Images/Frame 3.svg";
import ZaprositModal from "../Modal/ZaprositModal";
import ZakazatZvanok from "../Modal/ZakazatZvanok";
const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [zakazatZvanok, setZakazatZvanok] = useState(false);

  return (
    <nav className="p-4 bg-transparent">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center justify-center space-x-4">
          <a href="/" className="flex items-center">
            <img
              style={{ width: 141, height: 130 }}
              src={Logo}
              alt="Logo"
            />
            <p style={{ fontWeight: 700, fontSize: 24 }} className="ml-4 font-noto-sans-georgian">
              Влагостойкие двери <br /> от производителя
            </p>
          </a>
        </div>
        <ul className="flex space-x-6">
          <li>
            <p
              style={{
                fontFamily: "Noto Sans Georgian",
                fontWeight: 700,
                fontSize: 32,
                color: "#142839",
              }}
            >
              <span style={{ fontSize: 34, fontWeight: 400 }} className="text-custom-brown">
                +7 499
              </span>{" "}
              375 77 65
            </p>
          </li>
          <div className="flex space-x-2">
            <button className="px-4 py-2 text-white rounded-md bg-custom-brown">
              <FaWhatsapp style={{ fontSize: 28 }} />
            </button>
            <button className="px-4 py-2 text-white rounded-md bg-custom-brown">
              <FaTelegramPlane style={{ fontSize: 28 }} />
            </button>
          </div>
        </ul>
        <div className="flex space-x-4">
          <button 
          onClick={() =>setZakazatZvanok(true)}
          className="flex items-center px-4 py-2 border rounded-md border-custom-red">
            <MdOutlinePermPhoneMsg className="text-custom-red" style={{ fontSize: 28 }} />
            <p className="font-circe" style={{ fontSize: 14, fontWeight: 700, color: "#142839" }}>
              Заказать звонок
            </p>
          </button>
          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center px-4 py-2 text-white rounded-md bg-custom-red"
          >
            <CiViewList style={{ fontSize: 28 }} />
            <p className="font-circe" style={{ fontSize: 14, fontWeight: 700 }}>
              Запросить прайс-лист
            </p>
          </button>
        </div>
      </div>
      <hr className="mt-4 border-t-2 border-custom-brown" />

      <ZaprositModal open={modalOpen} handleClose={() => setModalOpen(false)} />
        <ZakazatZvanok open={zakazatZvanok} handleClose={() => setZakazatZvanok(false)} />
    </nav>
  );
};

export default Navbar;
