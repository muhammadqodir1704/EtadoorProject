import React from "react";
import { FaViber, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { CiViewList } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className="bg-transparent p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex justify-center items-center space-x-4">
          <a href="/" className="flex items-center">
            <img
              style={{ width: 141, height: 130 }}

              src="/Images/LogoFirst.png"
              alt="Logo"
              />
            <p style={{ fontWeight: 700, fontSize: 18 }} className="ml-4">
              Влагостойкие двери <br /> от производителя
            </p>
          </a>
        </div>
        <ul className="flex space-x-6">
          <li>
            <p
              style={{
                fontFamily: "Noto Sans Georgian",
                fontWeight: 400,
                fontSize: 32,
              }}
            >
              <span className="text-custom-brown">+7 499</span> 375 77 65
            </p>
          </li>
          <div className="flex space-x-2">
            <button className="text-white bg-custom-brown px-4 py-2 rounded-md">
              <FaWhatsapp style={{ fontSize: 28 }} />
            </button>
            <button className="text-white bg-custom-brown px-4 py-2 rounded-md">
              <FaTelegramPlane style={{ fontSize: 28 }} />
            </button>
          </div>
        </ul>
        <div className="flex space-x-4">
          <button className="flex items-center border border-custom-red px-4 py-2 rounded-md">
            <MdOutlinePermPhoneMsg className="text-custom-red" style={{ fontSize: 28 }} />
            <p style={{ fontSize: 15 }}>Заказать звонок</p>
          </button>
          <button className="flex items-center bg-custom-red text-white px-4 py-2 rounded-md">
            <CiViewList style={{ fontSize: 28 }} />
            <p style={{ fontSize: 15 }}>Запросить прайс-лист</p>
          </button>
        </div>
      </div>
      <hr className="mt-4 border-t-2 border-custom-brown" />
    
    </nav>
  );
};

export default Navbar;
