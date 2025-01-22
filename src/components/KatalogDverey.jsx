import React, { useEffect, useState } from "react";
import axios from "axios";
import meditsinas from "../Images/meditsina.svg";
import maktabs from "../Images/maktab.svg";
import sports from "../Images/sport.svg";
import xostels from "../Images/xostel.svg";
import ofiss from "../Images/ofis.svg";
import restorans from "../Images/restoran.svg";
import aeraports from "../Images/aeraport.svg";
import sklads from "../Images/sklad.svg";
import domas from "../Images/doma.svg";
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

const KatalogDverey = () => {
  const [doors, setDoors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoors = async () => {
      try {
        const response = await axios.get(
          "https://etadoor.koyeb.app/api/doors?page=0&size=20"
        );
        console.log("API Response:", response.data);
        setDoors(response?.data?.data?.content);
      } catch (err) {
        console.error("Error fetching doors:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDoors();
  }, []);

  return (
    <div>
      <h1 className=" ms-6 mb-4">Каталог дверей</h1>
      <div className="grid grid-cols-4 gap-5 justify-items-center">
        {loading && <p>Loading doors...</p>}
        {doors.map((item) => (
          <div
            key={item.id}
            className="w-full max-w-xs p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src={item.images[0]}
              alt={item.name}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="mt-3">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              <div className="mt-2">
                <h3 className="text-gray-700">
                  Price: <span className="font-medium">${item.price}</span>
                </h3>
                <h3 className="text-gray-700">
                  Final Price:{" "}
                  <span className="font-medium">${item.finalPrice}</span>
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2 className="mt-10 text-center">Наши двери применяют</h2>

      <div className=" flex justify-center mt-10 gap-4">
        <img src={meditsinas} alt="Meditsina" />
        <img src={maktabs} alt="Maktab" />
        <img src={sports} alt="Sport" />
      </div>

      <div className=" flex justify-center mt-4 gap-4">
        <img src={xostels} alt="Medits" />
        <img src={ofiss} alt="Meditsina" />
        <img src={restorans} alt="Meditsina" />
      </div>

      <div className=" flex justify-center mt-4 gap-4">
        <img src={aeraports} alt="Meditsina" />
        <img src={sklads} alt="Meditsina" />
        <img src={domas} alt="Meditsina" />
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center mt-12 space-y-8 md:space-y-0 md:space-x-8 px-4 bg-gray-900 py-10">
        <div className="text-center max-w-lg">
          <h2 className="text-red-500 mb-4">Запросить прайс-лист</h2>
          <p className="text-gray-300 mb-6 font-semibold">
            Оставьте свои контакты, и мы вышлем вам наш прайс-лист
          </p>
        </div>
        <form className="w-full max-w-md space-y-6">
          <input
            type="text"
            placeholder="Ваше имя"
            aria-label="Ваше имя"
            className="w-full font-semibold text-center px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="text"
              placeholder="Телефон*"
              aria-label="Телефон"
              className="w-full md:w-1/2 font-semibold text-center px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email*"
              aria-label="Email"
              className="w-full md:w-1/2 font-semibold text-center px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <p className="font-semibold text-sm text-gray-400 text-center">
              Нажимая на кнопку, вы даете согласие с Политикой
              конфиденциальности
            </p>
            <button
              type="submit"
              className="py-3 px-6 font-semibold bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
              Отправить заявку
            </button>
          </div>
        </form>
      </div>

      <div className="flex justify-center items-center mt-14">
        <p className="font-semibold text-sm w-[1430px]">
          Противоположная точка зрения подразумевает, что независимые
          государства, вне зависимости от их уровня, должны быть разоблачены. В
          своём стремлении улучшить пользовательский опыт мы упускаем, что явные
          признаки победы институционализации превращены в посмешище, хотя само
          их существование приносит несомненную пользу обществу. Но современная
          методология разработки однозначно определяет каждого участника как
          способного принимать собственные решения касаемо поставленных
          обществом задач. Лишь тщательные исследования конкурентов освещают
          чрезвычайно интересные особенности картины в целом, однако конкретные
          выводы, разумеется, указаны как претенденты на роль ключевых факторов.
          Ясность нашей позиции очевидна: высокое качество позиционных
          исследований прекрасно подходит для реализации модели развития. Вот
          вам яркий пример современных тенденций - граница обучения кадров
          предопределяет высокую востребованность поэтапного и последовательного
          развития общества. Повседневная практика показывает, что убеждённость
          некоторых оппонентов обеспечивает актуальность укрепления моральных
          ценностей. Высокий уровень вовлечения представителей целевой аудитории
          является четким доказательством простого факта: разбавленное изрядной
          долей эмпатии, рациональное мышление обеспечивает актуальность
          соответствующих условий активизации. Для современного мира повышение
          уровня гражданского сознания позволяет выполнить важные задания по
          разработке приоритизации разума над эмоциями. С другой стороны,
          существующая теория позволяет выполнить важные задания по разработке
          форм воздействия. Высокий уровень вовлечения представителей целевой
          аудитории является четким доказательством простого факта: высокое
          качество позиционных исследований способствует подготовке и реализации
          модели развития. Прежде всего, дальнейшее развитие различных форм
          деятельности позволяет оценить значение модели развития. Но элементы
          политического процесса указаны как претенденты на роль ключевых
          факторов. Задача организации, в особенности же семантический разбор
          внешних противодействий представляет собой интересный эксперимент
          проверки существующих финансовых и административных условий. Высокий
          уровень вовлечения представителей целевой аудитории является четким
          доказательством простого факта: понимание сути ресурсосберегающих
          технологий, а также свежий взгляд на привычные вещи - безусловно
          открывает новые горизонты для соответствующих условий активизации!
          Таким образом, выбранный нами инновационный путь не даёт нам иного
          выбора, кроме определения модели.
        </p>
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
              <li className="items-center">
                <p className="ms-2">г. Москва, Красная площадь дом 1</p>
                <p className="ms-2 mb-4">
                  +7 499 375 77 65 ООО “Рога и копыта”
                </p>
              </li>

              <li className="items-center">
                <p className="ms-2">г. Москва, Красная площадь дом 1</p>
                <p className="ms-2 mb-4">
                  +7 499 375 77 65 ООО “Рога и копыта”
                </p>
              </li>
              <li className="items-center">
                <p className="ms-2">г. Москва, Красная площадь дом 1</p>
                <p className="ms-2 mb-4">
                  +7 499 375 77 65 ООО “Рога и копыта”
                </p>
              </li>
              <li className="items-center">
                <p className="ms-2">г. Москва, Красная площадь дом 1</p>
                <p className="ms-2 mb-4">
                  +7 499 375 77 65 ООО “Рога и копыта”
                </p>
              </li>
              <li className="items-center">
                <p className="ms-2">г. Москва, Красная площадь дом 1</p>
                <p className="ms-2 mb-4">
                  +7 499 375 77 65 ООО “Рога и копыта”
                </p>
              </li>
              <li className="items-center">
                <p className="ms-2">г. Москва, Красная площадь дом 1</p>
                <p className="ms-2 mb-4">
                  +7 499 375 77 65 ООО “Рога и копыта”
                </p>
              </li>
              <li className="items-center">
                <p className="ms-2">г. Москва, Красная площадь дом 1</p>
                <p className="ms-2 mb-4">
                  +7 499 375 77 65 ООО “Рога и копыта”
                </p>
              </li>
              <li className="items-center">
                <p className="ms-2">г. Москва, Красная площадь дом 1</p>
                <p className="ms-2 mb-4">
                  +7 499 375 77 65 ООО “Рога и копыта”
                </p>
              </li>
              <li className="items-center">
                <p className="ms-2">г. Москва, Красная площадь дом 1</p>
                <p className="ms-2 mb-4">
                  +7 499 375 77 65 ООО “Рога и копыта”
                </p>
              </li>
              <li className="items-center">
                <p className="ms-2">г. Москва, Красная площадь дом 1</p>
                <p className="ms-2 mb-4">
                  +7 499 375 77 65 ООО “Рога и копыта”
                </p>
              </li>
              <li className="items-center">
                <p className="ms-2">г. Москва, Красная площадь дом 1</p>
                <p className="ms-2 mb-4">
                  +7 499 375 77 65 ООО “Рога и копыта”
                </p>
              </li>
              <li className=" items-center">
                <p className="ms-2">г. Москва, Красная площадь дом 1</p>
                <p className="ms-2 mb-4">
                  +7 499 375 77 65 ООО “Рога и копыта”
                </p>
              </li>
              <li className="items-center">
                <p className="ms-2">г. Москва, Красная площадь дом 1</p>
                <p className="ms-2 mb-4">
                  +7 499 375 77 65 ООО “Рога и копыта”
                </p>
              </li>
              <li className="items-center">
                <p className="ms-2">г. Москва, Красная площадь дом 1</p>
                <p className="ms-2 mb-4">
                  +7 499 375 77 65 ООО “Рога и копыта”
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="border-2 border-amber-700 mt-8" />

      <div className="flex justify-between mt-10 px-7">
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
      <div className=" flex gap-4 mt-8 px-7">
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
      <div className="mt-10 flex gap-4 px-7">
        <button className="border border-black px-9 py-2">Яндекс</button>
        <button className="border border-black px-9 py-2">Я Бизнес</button>
        <button className="border border-black px-9 py-2">Яндекс</button>
        <button className="border border-black px-9 py-2">Я Бизнес</button>
        <button className="border border-black px-9 py-2">Яндекс</button>
      </div>
      <div className=" flex gap-2 text-sm font-semibold mt-12 px-7">
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

export default KatalogDverey;
// Sardor
