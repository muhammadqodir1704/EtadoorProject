import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BsTelegram } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import {
  FaFacebookF,
  FaFileUpload,
  FaInstagram,
  FaRegClock,
  FaVk,
  FaYoutube,
} from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { MdCall } from "react-icons/md";
import { TbMapPin } from "react-icons/tb";
import myImage from "../Images/angular.png";
import Xarita from "../components/Xarita";
import Footer from "../components/Footer";

const Kontakti = () => {
  return (
    <div className="container mx-auto">
      <div
        className="p-7"
        style={{
          fontFamily: "'Circe', sans-serif",
        }}>
        <h1>Контакты</h1>
        <div className="flex flex-wrap gap-10 mt-10">
          <div className="flex-1">
            <h2 className="text-base font-semibold">Офис г. Москва</h2>
            <ul className="mt-7 space-y-4 text-sm text-gray-800">
              <li className="flex items-center">
                <button
                  className=" bg-amber-700 p-2"
                  style={{
                    borderRadius: "50%",
                  }}>
                  <TbMapPin className=" text-white" />
                </button>
                <p className="ms-2 ">г. Москва, Красная площадь дом 1</p>
              </li>
              <li className="flex items-center">
                <button
                  className=" bg-amber-700 p-2"
                  style={{
                    borderRadius: "50%",
                  }}>
                  <FiPhoneCall className=" text-white" />
                </button>
                <p className="ms-2">+7 499 375 77 65</p>
              </li>
              <li className="flex items-center">
                <button
                  className=" bg-amber-700 p-2"
                  style={{
                    borderRadius: "50%",
                  }}>
                  <CiMail className=" text-white" />
                </button>
                <p className="ms-2">etadoor@yandex.ru</p>
              </li>
              <li className="flex items-center">
                <button
                  className=" bg-amber-700 p-2"
                  style={{
                    borderRadius: "50%",
                  }}>
                  <FaRegClock className=" text-white" />
                </button>
                <p className="ms-2">
                  ПН-ПТ с 9.00 до 19.00, СБ с 10.00 до 18.00
                </p>
              </li>
            </ul>
            <div className="flex items-center mt-12 gap-4 text-sm">
              <p>Связаться с нами:</p>
              <button
                className=" bg-amber-700 p-2"
                style={{
                  borderRadius: "50%",
                }}>
                <MdCall className=" text-white" />
              </button>
              <button
                className=" bg-amber-700 p-2"
                style={{
                  borderRadius: "50%",
                }}>
                <BiSolidPhoneCall className=" text-white" />
              </button>
              <button
                className=" bg-amber-700 p-2"
                style={{
                  borderRadius: "50%",
                }}>
                <BsTelegram className=" text-white" />
              </button>
            </div>
            <div className="flex items-center mt-10 gap-4 text-sm">
              <p>Мы в соц.сетях:</p>
              <button
                className=" bg-amber-700 p-2"
                style={{
                  borderRadius: "50%",
                }}>
                <FaVk className=" text-white" />
              </button>
              <button
                className=" bg-amber-700 p-2"
                style={{
                  borderRadius: "50%",
                }}>
                <FaYoutube className=" text-white" />
              </button>
              <button
                className=" bg-amber-700 p-2"
                style={{
                  borderRadius: "50%",
                }}>
                <FaInstagram className=" text-white" />
              </button>
              <button
                className=" bg-amber-700 p-2"
                style={{
                  borderRadius: "50%",
                }}>
                <FaFacebookF className=" text-white" />
              </button>
            </div>
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

        <Xarita />

        <Footer />
      </div>
    </div>
  );
};

export default Kontakti;
