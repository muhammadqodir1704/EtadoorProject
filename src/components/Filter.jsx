import React from "react";
import ChoosenImg from "../Images/ChosenImg.svg";
import Strelka from "../Images/Strelka.svg";
const Filter = () => {
  return (
    <div style={{ backgroundColor: "#F9F9F9" }}>
      <div className="container mx-auto p-6 min-h-screen rounded-lg">
        <h2
          style={{ fontSize: 34, fontWeight: 700 }}
          className=" text-center mb-8"
        >
          Подберите свою дверь
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-7 mb-8 ">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Где будет использоваться
            </label>
            <select
              style={{ width: 450, height: 45 }}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option>Производство или складское помещение</option>
              <option>Жилой дом или квартира</option>
              <option>Ресторан, кафе, бистро</option>
              <option>Аэропорт, авто/железнодорожный вокзал</option>
              <option>Офис или бизнес центр</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Тип двери
            </label>
            <select
              style={{ width: 450, height: 45 }}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option>Одностворчатая</option>
              <option>Двустворчатая</option>
              <option>Широкая</option>
              <option>Маятниковая</option>
              <option>Раздвижная</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Количество
            </label>
            <select
              style={{ width: 450, height: 45 }}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Коробка
            </label>
            <select
              style={{ width: 450, height: 45 }}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option>Маятниковая ALU</option>
              <option>Маятниковая деревянная</option>
              <option>ALU</option>
              <option>Деревянная</option>
              <option>ДПК</option>
              <option>Нет</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Окно
            </label>
            <select
              style={{ width: 450, height: 45 }}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option>Нет</option>
              <option>С окном</option>
              <option>С иллюминатором</option>
              <option>С передаточным окном</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Фурнитура
            </label>
            <select
              style={{ width: 450, height: 45 }}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option>Хром</option>
              <option>Золото</option>
              <option>Черный</option>
            </select>
          </div>
        </div>
        <div style={{ gap: 50, position: "relative" }} className=" mb-8 flex justify-center">
          <div>
            <img style={{ width: 375, height: 375 }} src={ChoosenImg} alt="" />
          </div>
          <div className="mb-8">
            <p className="text-lg font-medium mb-4">ЦВЕТ полотна</p>
            <div className="flex gap-4 items-center mr-6">
              <button
                style={{ width: 80, height: 80 }}
                className=" bg-red-400 rounded-full border-2 border-gray-300"
              ></button>
              <button
                style={{ width: 80, height: 80 }}
                className=" bg-red-400 rounded-full border-2 border-gray-300"
              ></button>
              <button
                style={{ width: 80, height: 80 }}
                className=" bg-red-400 rounded-full border-2 border-gray-300"
              ></button>
              <button
                style={{ width: 80, height: 80 }}
                className=" bg-red-400 rounded-full border-2 border-gray-300"
              ></button>
              <button
                style={{ width: 80, height: 80 }}
                className=" bg-red-400 rounded-full border-2 border-gray-300"
              ></button>
              <button
                style={{ width: 80, height: 80 }}
                className=" bg-red-400 rounded-full border-2 border-gray-300"
              ></button>
              <button
                style={{ width: 80, height: 80 }}
                className=" bg-red-400 rounded-full border-2 border-gray-300"
              ></button>
              <button
                style={{ width: 80, height: 80 }}
                className=" bg-red-400 rounded-full border-2 border-gray-300"
              ></button>
            </div>

            <div style={{ width: 826, height: 130 }} className="mb-8">
              <p className="text-lg font-medium mb-4">РАЗМЕР полотна</p>
              <div className="grid grid-cols-3 gap-4">
                <label className="flex items-center gap-2">
                  <input type="radio" />
                  200x2000 мм
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" />
                  300x2000 мм
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" />
                  400x2000 мм
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" />
                  500x2000 мм
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" />
                  600x2000 мм
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" />
                  700x2000 мм
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" />
                  800x2000 мм
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" />
                  900x2000 мм
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" />
                  Нестандартный
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div style={{ width: 1052, height: 152 }} >
            <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Телефон"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <textarea
              placeholder="Комментарий"
              className="w-full p-2 border border-gray-300 rounded mb-4"
              rows="4"
            ></textarea>
             <div className="flex justify-center">
            <button style={{width: 302 , height: 65 , fontSize: 32}} className=" py-3 bg-orange-500 text-white rounded hover:bg-orange-600">
              Отправить заявку
            </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Filter;
