import myImage from "../Images/angular.png";
import { CiMail } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { TbMapPin } from "react-icons/tb";
import {
  FaFacebookF,
  FaFileUpload,
  FaInstagram,
  FaVk,
  FaYoutube,
} from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BsTelegram } from "react-icons/bs";
import vektor from "../Images/vektor.png";

const Footer = () => {
  return (
    <>
      <div className="flex justify-between mt-10 px-36">
        <ul className="mt-7 space-y-4 text-sm">
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
              <FiPhoneCall className=" text-white" />
            </button>
            <p className="ms-2">+7 499 375 77 65</p>
          </li>
          <li className="flex items-start">
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
        <ul className="ms-10 text-sm space-y-2">
          <li className="font-semibold">Продукция:</li>
          <li>Каталог дверей</li>
          <li>Фурнитура</li>
          <li>Погонаж</li>
          <li>Галерея</li>
          <li>Выбор цвета</li>
        </ul>
        <ul className="ms-10 text-sm space-y-2">
          <li className="font-semibold">Информация:</li>
          <li>Доставка и оплата</li>
          <li>Гарантии и возврат</li>
          <li>Где купить</li>
          <li>О компании</li>
          <li>Сотрудничество</li>
        </ul>
        <div className="w-70">
          <button className="flex items-center mb-4 p-2 bg-gray-200 w-full text-sm">
            <FiPhoneCall className="mr-2 text-red-600" />
            Заказать звонок
          </button>
          <button className="flex items-center mb-4 p-2 bg-gray-200 w-full text-sm">
            <FaFileUpload className="mr-2 text-red-600" />
            Запросить прайс-лист
          </button>
          <button className="p-2 bg-gray-200 w-full text-sm">
            Стать партнером
          </button>
        </div>
      </div>
      <div className=" flex gap-4 mt-8 px-36">
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
      <div className="mt-10 flex gap-4 px-36">
        <button className="border border-black px-9 py-2">
          <span className=" text-red-600">Я</span>ндекс
        </button>
        {/* <Link> */}
        <div className=" border border-black px-9 py-2 items-center cursor-pointer">
          <img src={vektor} alt="" width={150} />
        </div>
        {/* </Link> */}
        <button className="border border-black px-9 py-2">
          <span className=" text-red-600">Я</span>ндекс
        </button>
        <div className=" border border-black px-9 py-2 items-center cursor-pointer">
          <img src={vektor} alt="" width={150} />
        </div>
        <button className="border border-black px-9 py-2">
          <span className=" text-red-600">Я</span>ндекс
        </button>
      </div>
      <div className=" flex gap-2 text-sm font-semibold mt-12 px-36">
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
    </>
  );
};

export default Footer;
