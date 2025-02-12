import React from "react";
import { BsTelegram } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import {
  FaRegClock,
} from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { TbMapPin } from "react-icons/tb";
import { Link } from "react-router-dom";
import Sertifikati from "./Sertifikati";
const Kontakti = () => {
  return (
    <div className="container mx-auto p-6 rounded-lg">
      <Link to={"/"}>Главная | </Link>
      <Link to={"/kontakti"} className="text-stone-500">
        Контакты
      </Link>
      <div
        className="p-7"
        style={{
          fontFamily: "'Circe', sans-serif",
        }}>
        <h1 className=" font-bold text-2xl">Контакты</h1>
        <div className="flex flex-wrap gap-10 mt-10">
          <div className="flex-1">
            <h2 className="text-base font-semibold">Офис г. Москва</h2>
            <ul className="mt-7 space-y-4 text-sm text-gray-800">
              <li
                className="flex items-center cursor-pointer text-xl"
                onClick={() =>
                  (window.location.href =
                    "https://www.google.com/maps/@41.309534,69.230092,15z?hl=en&entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D")
                } 
              >
                <button
                  className="bg-amber-700 p-2"
                  style={{ borderRadius: "50%" }}>
                  <TbMapPin className="text-white" />
                </button>
                <p className="ms-2">+998 (93)263 09 05</p>
              </li>
              <li className="flex items-center text-xl">
                <button
                  className=" bg-amber-700 p-2"
                  style={{
                    borderRadius: "50%",
                  }}>
                  <FiPhoneCall
                    onClick={() =>
                      window.open(
                        "https://www.facebook.com/?locale=ru_RU",
                        "_blank"
                      )
                    }
                    className=" text-white"
                  />
                </button>
                <p className="ms-2">+998 (50) 100 24 14</p>
              </li>
              <li className="flex items-center text-xl">
                <button
                  className="bg-amber-700 p-2"
                  style={{ borderRadius: "50%" }}
                  onClick={() => window.open("https://gmail.com", "_blank")}>
                  <CiMail className="text-white" />
                </button>
                <p className="ms-2">lutfiddinovsardor</p>@gmail.com
              </li>
              <li className="flex items-center text-xl">
                <button
                  className=" bg-amber-700 p-2"
                  style={{
                    borderRadius: "50%",
                  }}
                  onClick={() =>
                    window.open(
                      "https://nim.uz/mijozlar-uchun/aniqvaqt/",
                      "_blank"
                    )
                  }>
                  <FaRegClock className=" text-white" />
                </button>
                <p className="ms-2">
                  ПН-ПТ с 9.00 до 19.00, СБ с 10.00 до 18.00
                </p>
              </li>
              <li className="flex items-center text-xl">
                <button
                  className="bg-amber-700 p-2"
                  style={{ borderRadius: "50%" }}
                  onClick={() =>
                    window.open("https://t.me/proffdev", "_blank")
                  }>
                  <BsTelegram className="text-white" />
                </button>
                <p className="ms-2">proffdev</p>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.701435157919!2d69.24153831542145!3d41.29949587927002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4f6b8c3b2d1%3A0x8b41bfa5c9c0eafa!2sAmir%20Temur%20Square!5e0!3m2!1sen!2s!4v1691570405772!5m2!1sen!2s"
              width="900"
              height="400"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bizning manzil"
              className="rounded-lg shadow-md"></iframe>
          </div>
        </div>
      </div>
      <Sertifikati />
    </div>
  );
};

export default Kontakti;
