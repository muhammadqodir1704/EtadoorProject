import React from "react";
import { Link } from "react-router-dom";
import Xarita from "../components/Xarita";
const Pagonaj = () => {
  const columns = [
    {
      id: 1,
      title: "Коробка дверная распашная ДПК серая 75×38×2100 мм",
      article: "M-18702",
      price: 110.94,
      imagesUrl: [
        "https://etadoor.ru/assets/cache_image/products/306/jpeg/korobka-dvernaya-raspashnaya-dpk-kolerovannaya-75-38-2100-mm_0x0_127.jpeg",
      ],
      sellerId: 3,
      validSizeFormat: true,
    },
    {
      id: 3,
      title: "Коробка дверная распашная ДПК серая 75×38×2100 мм",
      article: "M-75809",
      price: 20.22,
      quantity: 404,
      imagesUrl: [
        "https://etadoor.ru/assets/cache_image/products/305/jpeg/korobka-dpk_0x0_127.jpeg",
      ],
      sellerId: 3,
      validSizeFormat: true,
    },
    {
      id: 4,
      title: "Коробка дверная распашная ДПК серая 75×38×2100 мм",
      article: "M-26422",
      price: 150.1,
      quantity: 315,
      imagesUrl: [
        "https://etadoor.ru/assets/cache_image/products/329/jpeg/porog-al_0x0_127.jpeg",
      ],
      sellerId: 3,
      validSizeFormat: true,
    },
    {
      id: 5,
      title: "Коробка дверная распашная ДПК серая 75×38×2100 мм",
      article: "M-40304",
      price: 33.92,
      quantity: 469,
      imagesUrl: [
        "https://etadoor.ru/assets/cache_image/products/307/jpeg/korobka-al-raspashnaya_0x0_127.jpeg",
      ],
      sellerId: 3,
      validSizeFormat: true,
    },
    {
      id: 6,
      title: "Коробка дверная распашная ДПК серая 75×38×2100 мм",
      article: "M-69814",
      price: 179.28,
      quantity: 175,
      imagesUrl: [
        "https://etadoor.ru/assets/cache_image/products/316/jpeg/nalichnik-teleskopicheskij-pvx-seryij-70-12-2200-mm_0x0_127.jpeg",
      ],
      sellerId: 3,
      validSizeFormat: true,
    },
    {
      id: 7,
      title: "Коробка дверная распашная ДПК серая 75×38×2100 мм",
      article: "M-47979",
      price: 139.72,
      quantity: 76,
      imagesUrl: [
        "https://etadoor.ru/assets/cache_image/products/315/jpeg/nalichnik-pvx_0x0_127.jpeg",
      ],
      sellerId: 3,
      validSizeFormat: true,
    },
    {
      id: 8,
      title: "Коробка дверная распашная ДПК серая 75×38×2100 мм",
      article: "M-36625",
      price: 88.61,
      quantity: 91,
      imagesUrl: [
        "https://etadoor.ru/assets/cache_image/products/317/jpeg/nalichnik-teleskopicheskij-pvx-kolerovannyij_0x0_127.jpeg",
      ],
      sellerId: 3,
      validSizeFormat: true,
    },
    {
      id: 9,
      title: "Коробка дверная распашная ДПК серая 75×38×2100 мм",
      size: "100x25",
      article: "M-75304",
      price: 47.66,
      quantity: 168,
      imagesUrl: [
        "https://etadoor.ru/assets/cache_image/products/319/jpeg/nalichnik-dobor-teleskopicheskij-pvx-seryij-70-90-2200-mm_0x0_127.jpeg",
      ],
      sellerId: 3,
      validSizeFormat: true,
    },
    {
      id: 10,
      title: "Коробка дверная распашная ДПК серая 75×38×2100 мм",
      article: "M-89788",
      price: 137.44,
      quantity: 467,
      imagesUrl: [
        "https://etadoor.ru/assets/cache_image/products/322/jpeg/dobor-190_0x0_127.jpeg",
      ],
      sellerId: 3,
      validSizeFormat: true,
    },
    {
      id: 11,
      title: "Коробка дверная распашная ДПК серая 75×38×2100 мм",
      article: "M-65894",
      price: 84.84,
      quantity: 173,
      imagesUrl: [
        "https://etadoor.ru/assets/cache_image/products/329/jpeg/porog-al_0x0_127.jpeg",
      ],
      sellerId: 3,
      validSizeFormat: true,
    },
  ];

  return (
    <div className="container mx-auto p-6 rounded-lg">
      <div className="flex items-center px-10 mb-6">
        <Link to="/" className="text-black hover:underline">
          Главная |
        </Link>
        <span className="text-base"> Погонаж</span>
      </div>
      <h1 style={{ fontWeight: 700, fontSize: 34 }} className="px-10 mb-6 text-2xl font-noto-sans-georgian">Погонаж</h1>
      <div className="grid grid-cols-1 gap-6 px-10 mb-6 cursor-pointer sm:grid-cols-3 md:grid-cols-4">
        {columns.map((item, index) => (
          <div
            style={{ width: 330, height: 483 }}
            key={index}
            className="p-4 transition duration-300 ease-out bg-white border rounded-lg shadow-md hover:shadow-xl hover:scale-105"
          >
            <img
              src={item.imagesUrl[0]}
              alt={item.title}
              className="object-cover w-full h-48 rounded-md"
            />
            <div className="mt-4">
              <h3 style={{fontSize:18 , fontWeight:500}} className="font-circe">{item.title}</h3>
              <p className="text-sm text-gray-500">
                {item.size} | {item.article}
              </p>
              <p className="text-lg text-gray-700 flex justify-between mt-7">
                <p
                  className="font-circe"
                  style={{ fontSize: 16, fontWeight: 400 }}
                >
                  Артикул                </p>
                <p style={{ color: "#219653", fontSize: 16, fontWeight: 700 }}>
                В-00305
                </p>
              </p>
              <hr style={{ marginTop: 10 }} />
              <p className="mt-2 text-lg font-bold text-gray-800 flex justify-center">
                {item.price}<span style={{fontSize: 15 , fontWeight: 500}}>руб.  <br /> за 1 стойку</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <Xarita/>
    </div>
  );
};

export default Pagonaj;
