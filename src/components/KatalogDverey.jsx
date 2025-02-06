import React, { useEffect, useState } from "react";
import Rasm from "./Rasm";
import Input from "./Input";
import EtadoorImg from "./EtadoorImg";
import { Link } from "react-router-dom";

const KatalogDverey = () => {
  const [doors, setDoors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoors = async () => {
      try {
        const response = await fetch(
          "https://etadoor.koyeb.app/api/doors?page=0&size=20",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          }
        );
        const result = await response.json();
        setDoors(result.data || []);
        setLoading(false);
      } catch (error) {
        console.error("API xatolik:", error);
        setLoading(false);
      }
    };

    fetchDoors();
  }, []);

  return (
    <div className="container mx-auto p-6 min-h-screen rounded-lg">
      <div>
        <Link to={"/"}>Главная</Link> /{" "}
        <Link to={"/Katalog"} className="text-stone-500">
          Каталог дверей
        </Link>
      </div>
      <h1 style={{ fontSize: 34, fontWeight: 700 }} className=" ms-6 mb-4">
        Каталог дверей
      </h1>
      <div className=" grid grid-cols-4 gap-5 justify-items-center">
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
      <EtadoorImg />
      <Rasm />
      <Input />
    </div>
  );
};

export default KatalogDverey;
