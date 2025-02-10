import myImage from "../Images/angular.png";
import { CiMail } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { TbMapPin } from "react-icons/tb";
import Navbar from "./Navbar";
import {
  FaFacebookF,
  FaFileUpload,
  FaInstagram,
  FaVk,
  FaYoutube,
} from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import vektor from "../Images/vektor.png";
import ZaprositModal from "../Modal/ZaprositModal";
import ZakazatZvanok from "../Modal/ZakazatZvanok";
import { useState } from "react";
const Footer = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [zakazatZvanok, setZakazatZvanok] = useState(false);
  return (
    <div className="w-full">
      <div className="container mx-auto flex justify-between mt-10 px-4 lg:px-36">
        <ul className="mt-7 space-y-4 text-sm">
          <li className="flex items-center text-xl">
            <button
              className=" bg-amber-700 p-2"
              style={{
                borderRadius: "50%",
              }}>
              <CiMail className=" text-white" />
            </button>
            <p className="ms-2">etadoor@yandex.ru</p>
          </li>
          <li className="flex items-center text-xl">
            <button
              className=" bg-amber-700 p-2"
              style={{
                borderRadius: "50%",
              }}>
              <FiPhoneCall className=" text-white" />
            </button>
            <p className="ms-2">+998 50 009 28 30</p>
          </li>
          <li className="flex items-start text-xl">
            <button
              className=" bg-amber-700 p-2"
              style={{
                borderRadius: "50%",
              }}>
              <TbMapPin className=" text-white" />
            </button>
            <div className="ms-2">
              <p>г. Москва, Красная площадь дом 1</p>
              <p>ПН-ПТ с 9.00 до 19.00, СБ с 10.00 до 18.00</p>
            </div>
          </li>
        </ul>
        <ul className="ms-10 space-y-2 text-xl">
          <li className="font-semibold">Продукция:</li>
          <li>Каталог дверей</li>
          <li>Фурнитура</li>
          <li>Погонаж</li>
          <li>Галерея</li>
          <li>Выбор цвета</li>
        </ul>
        <ul className="ms-10 text-xl   space-y-2">
          <li className="font-semibold">Информация:</li>
          <li>Доставка и оплата</li>
          <li>Гарантии и возврат</li>
          <li>Где купить</li>
          <li>О компании</li>
          <li>Сотрудничество</li>
        </ul>
        <div className="w-70">
          <button
           onClick={() => setModalOpen(true)}
            style={{
              color: "#142839",
              fontSize: 20,
              width: 360,
              height: 50,
              backgroundColor: "#F9F9F9",
            }}
            className="flex items-center justify-center mb-4 w-full text-sm border border-custom-brown">
            <FiPhoneCall className="mr-2 text-red-600" />
            Заказать звонок
          </button>
          <button
          onClick={() => setModalOpen(true)}
            style={{
              color: "#142839",
              fontSize: 20,
              width: 360,
              height: 50,
              backgroundColor: "#F9F9F9",
            }}
            className="flex items-center justify-center mb-4  w-full text-sm border border-custom-brown">
            <FaFileUpload className="mr-2 text-red-600" />
            Запросить прайс-лист
          </button>
          <button
            style={{
              color: "#142839",
              fontSize: 20,
              width: 360,
              height: 50,
              backgroundColor: "#F9F9F9",
            }}
            className="flex items-center justify-center mb-4  w-full text-sm border border-custom-brown">
            Стать партнером
          </button>
        </div>
      </div>
      <div className="container mx-auto flex gap-4 mt-8 lg:px-36">
        <button
          className="bg-amber-700 p-2 "
          style={{ borderRadius: "50%" }}
          onClick={() => window.open("https://t.me/LS2414", "_blank")}>
          <BsTelegram className="text-white text-2xl" />
        </button>
        <button
          className="bg-amber-700 p-2"
          style={{ borderRadius: "50%" }}
          onClick={() => window.open("https://www.whatsapp.com/", "_blank")}>
          <FaVk className=" text-white text-2xl" />
        </button>
        <button
          className="bg-amber-700 p-2"
          style={{ borderRadius: "50%" }}
          onClick={() => window.open("https://www.youtube.com/", "_blank")}>
          <FaYoutube className=" text-white text-2xl" />
        </button>
        <button
          className="bg-amber-700 p-2"
          style={{ borderRadius: "50%" }}
          onClick={() =>
            window.open("https://www.instagram.com/kamol1dd1nov1c", "_blank")
          }>
          <FaInstagram className="text-white text-2xl" />
        </button>
        <button
          className="bg-amber-700 p-2"
          style={{ borderRadius: "50%" }}
          onClick={() =>
            window.open("https://www.facebook.com/?locale=ru_RU", "_blank")
          }>
          <FaFacebookF className=" text-white text-2xl" />
        </button>
      </div>
      <div className="container mx-auto mt-10 flex gap-4 lg:px-36">
        <a
          href="https://yandex.uz/"
          className="border border-black px-9 py-2 font-bold text-2xl">
          <span className="text-red-600">Я</span>ндекс
        </a>

        <a
          href="https://ru.wikipedia.org/wiki/%D0%91%D0%B8%D0%B7%D0%BD%D0%B5%D1%81"
          className="border border-black px-9 py-2 flex items-center
          cursor-pointer font-bold">
          <img src={vektor} alt="" width={150} />
        </a>

        <a
          href="https://yandex.uz/"
          className="border border-black px-9 py-2 font-bold text-2xl">
          <span className="text-red-600">Я</span>ндекс
        </a>

        <a
          href="https://ru.wikipedia.org/wiki/%D0%91%D0%B8%D0%B7%D0%BD%D0%B5%D1%81"
          className="border border-black px-9 py-2 flex items-center
          cursor-pointer font-bold">
          <img src={vektor} alt="" width={150} />
        </a>

        <a
          href="https://yandex.uz/"
          className="border border-black px-9 py-2 font-bold text-2xl">
          <span className="text-red-600">Я</span>ндекс
        </a>
      </div>

      <div className="container mx-auto flex gap-2 text-sm font-semibold mt-12 lg:px-36">
        <p>© Двери Etadoor. 2021 г</p>
        <p>Политика конфиденциальности</p>
        <div className=" flex gap-10">
          <p>Все права защищены</p>
          <p>
            Реквизиты компании: ИНН 11111111111111111111 ОГРН 111111111111111
          </p>
          <div className=" flex items-center gap-2">
            <p className=" ms-24">Сайт разработан</p>
            <img src={myImage} alt="Agelar logo" />
          </div>
        </div>
      </div>
        <ZaprositModal open={modalOpen} handleClose={() => setModalOpen(false)} />
            <ZakazatZvanok
              open={zakazatZvanok}
              handleClose={() => setZakazatZvanok(false)}
            />
    </div>
    
  );
};

export default Footer;
