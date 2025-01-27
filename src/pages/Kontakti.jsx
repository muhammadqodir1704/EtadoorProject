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

const Kontakti = () => {
  return (
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
              <TbMapPin
                className=" bg-amber-700 p-3"
                style={{
                  borderRadius: "50%",
                }}
              />
              <p className="ms-2 ">г. Москва, Красная площадь дом 1</p>
            </li>
            <li className="flex items-center">
              <FiPhoneCall
                className=" bg-amber-700 p-3"
                style={{
                  borderRadius: "50%",
                }}
              />
              <p className="ms-2">+7 499 375 77 65</p>
            </li>
            <li className="flex items-center">
              <CiMail
                className=" bg-amber-700 p-3"
                style={{
                  borderRadius: "50%",
                }}
              />
              <p className="ms-2">etadoor@yandex.ru</p>
            </li>
            <li className="flex items-center">
              <FaRegClock
                className=" bg-amber-700 p-3"
                style={{
                  borderRadius: "50%",
                }}
              />
              <p className="ms-2">ПН-ПТ с 9.00 до 19.00, СБ с 10.00 до 18.00</p>
            </li>
          </ul>
          <div className="flex items-center mt-12 gap-4 text-sm">
            <p>Связаться с нами:</p>
            <MdCall
              className=" bg-amber-700 p-3"
              style={{
                borderRadius: "50%",
              }}
            />
            <BiSolidPhoneCall
              className=" bg-amber-700 p-3"
              style={{
                borderRadius: "50%",
              }}
            />
            <BsTelegram
              className=" bg-amber-700 p-3"
              style={{
                borderRadius: "50%",
              }}
            />
          </div>
          <div className="flex items-center mt-10 gap-4 text-sm">
            <p>Мы в соц.сетях:</p>
            <FaVk
              className=" bg-amber-700 p-3"
              style={{
                borderRadius: "50%",
              }}
            />
            <FaYoutube
              className=" bg-amber-700 p-3"
              style={{
                borderRadius: "50%",
              }}
            />
            <FaInstagram
              className=" bg-amber-700 p-3"
              style={{
                borderRadius: "50%",
              }}
            />
            <FaFacebookF
              className=" bg-amber-700 p-3"
              style={{
                borderRadius: "50%",
              }}
            />
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

      <div className="flex flex-wrap gap-10 mt-12">
        <div className="flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.701435157919!2d69.24153831542145!3d41.29949587927002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4f6b8c3b2d1%3A0x8b41bfa5c9c0eafa!2sAmir%20Temur%20Square!5e0!3m2!1sen!2s!4v1691570405772!5m2!1sen!2s"
            width="100%"
            height="440"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bizning manzil"
            className="rounded-lg shadow-md"></iframe>
        </div>
        <div className="flex-1">
          <h2>Где купить?</h2>
          <div className="mt-7 space-y-4 text-sm h-96 overflow-y-auto scroll-container cursor-pointer">
            <ul>
              <li className="flex items-center">
                <p className="ms-2">г. Москва, Красная площадь дом 1</p>
              </li>
              <p className="ms-2 mb-4">+7 499 375 77 65 ООО “Рога и копыта”</p>
              <li className="flex items-center">
                <p className="ms-2">г. Москва, Красная площадь дом 1</p>
              </li>
              <p className="ms-2 mb-4">+7 499 375 77 65 ООО “Рога и копыта”</p>
              <li className="flex items-center">
                <p className="ms-2">г. Москва, Красная площадь дом 1</p>
              </li>
              <p className="ms-2 mb-4">+7 499 375 77 65 ООО “Рога и копыта”</p>
              <li className="flex items-center">
                <p className="ms-2">г. Москва, Красная площадь дом 1</p>
              </li>
              <p className="ms-2 mb-4">+7 499 375 77 65 ООО “Рога и копыта”</p>
              <li className="flex items-center">
                <p className="ms-2">г. Москва, Красная площадь дом 1</p>
              </li>
              <p className="ms-2 mb-4">+7 499 375 77 65 ООО “Рога и копыта”</p>
              <li className="flex items-center">
                <p className="ms-2">г. Москва, Красная площадь дом 1</p>
              </li>
              <p className="ms-2 mb-4">+7 499 375 77 65 ООО “Рога и копыта”</p>
              <li className="flex items-center">
                <p className="ms-2">г. Москва, Красная площадь дом 1</p>
              </li>
              <p className="ms-2 mb-4">+7 499 375 77 65 ООО “Рога и копыта”</p>
              <li className="flex items-center">
                <p className="ms-2">г. Москва, Красная площадь дом 1</p>
              </li>
              <p className="ms-2 mb-4">+7 499 375 77 65 ООО “Рога и копыта”</p>
              <li className="flex items-center">
                <p className="ms-2">г. Москва, Красная площадь дом 1</p>
              </li>
              <p className="ms-2 mb-4">+7 499 375 77 65 ООО “Рога и копыта”</p>
              <li className="flex items-center">
                <p className="ms-2">г. Москва, Красная площадь дом 1</p>
              </li>
              <p className="ms-2 mb-4">+7 499 375 77 65 ООО “Рога и копыта”</p>
              <li className="flex items-center">
                <p className="ms-2">г. Москва, Красная площадь дом 1</p>
              </li>
              <p className="ms-2 mb-4">+7 499 375 77 65 ООО “Рога и копыта”</p>
              <li className="flex items-center">
                <p className="ms-2">г. Москва, Красная площадь дом 1</p>
              </li>
              <p className="ms-2 mb-4">+7 499 375 77 65 ООО “Рога и копыта”</p>
              <li className="flex items-center">
                <p className="ms-2">г. Москва, Красная площадь дом 1</p>
              </li>
              <p className="ms-2 mb-4">+7 499 375 77 65 ООО “Рога и копыта”</p>
              <li className="flex items-center">
                <p className="ms-2">г. Москва, Красная площадь дом 1</p>
              </li>
              <p className="ms-2 mb-4">+7 499 375 77 65 ООО “Рога и копыта”</p>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-10">
        <ul className="mt-7 space-y-4 text-sm">
          <li className="flex items-center">
            <CiMail
              className=" bg-amber-700 p-3"
              style={{
                borderRadius: "50%",
              }}
            />
            <p className="ms-2">etadoor@yandex.ru</p>
          </li>
          <li className="flex items-center">
            <FiPhoneCall
              className=" bg-amber-700 p-3"
              style={{
                borderRadius: "50%",
              }}
            />
            <p className="ms-2">+7 499 375 77 65</p>
          </li>
          <li className="flex items-start">
            <TbMapPin
              className=" bg-amber-700 p-3"
              style={{
                borderRadius: "50%",
              }}
            />
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
      <div className=" flex gap-4 mt-8">
        <MdCall
          className="bg-amber-700 p-3 text-white"
          style={{
            borderRadius: "50%",
          }}
        />
        <BiSolidPhoneCall
          className="bg-amber-700 p-3 text-white"
          style={{
            borderRadius: "50%",
          }}
        />
        <BsTelegram
          className="bg-amber-700 p-3 text-white"
          style={{
            borderRadius: "50%",
          }}
        />
        <FaVk
          className="bg-amber-700 p-3 text-white"
          style={{
            borderRadius: "50%",
          }}
        />
        <FaYoutube
          className="bg-amber-700 p-3 text-white"
          style={{
            borderRadius: "50%",
          }}
        />
        <FaInstagram
          className="bg-amber-700 p-3 text-white"
          style={{
            borderRadius: "50%",
          }}
        />
        <FaFacebookF
          className="bg-amber-700 p-3 text-white"
          style={{
            borderRadius: "50%",
          }}
        />
      </div>
      <div className="mt-10 flex gap-4">
        <button className="border border-black px-9 py-2">Яндекс</button>
        <button className="border border-black px-9 py-2">Я Бизнес</button>
        <button className="border border-black px-9 py-2">Яндекс</button>
        <button className="border border-black px-9 py-2">Я Бизнес</button>
        <button className="border border-black px-9 py-2">Яндекс</button>
      </div>
      <div className=" flex gap-2 text-sm font-semibold mt-12">
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
    </div>
  );
};

export default Kontakti;
