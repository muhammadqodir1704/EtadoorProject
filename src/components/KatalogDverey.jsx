import React, { useEffect, useState } from "react";
import axios from "axios";
import meditsinas from "../Images/meditsina.svg";
import maktabs from "../Images/maktab.svg";
// import meditsinas from "../Images/meditsina.svg";
// import meditsinas from "../Images/meditsina.svg";
// import meditsinas from "../Images/meditsina.svg";
// import meditsinas from "../Images/meditsina.svg";
// import meditsinas from "../Images/meditsina.svg";
// import meditsinas from "../Images/meditsina.svg";
// import meditsinas from "../Images/meditsina.svg";

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
        setDoors(response?.data?.data?.content || []);
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
        <img src={maktabs} alt="Meditsina" />
        <img src={meditsinas} alt="Meditsina" />
      </div>

      <div className=" flex justify-center mt-4 gap-4">
        <img src={meditsinas} alt="Meditsina" />
        <img src={meditsinas} alt="Meditsina" />
        <img src={meditsinas} alt="Meditsina" />
      </div>

      <div className=" flex justify-center mt-4 gap-4">
        <img src={meditsinas} alt="Meditsina" />
        <img src={meditsinas} alt="Meditsina" />
        <img src={meditsinas} alt="Meditsina" />
      </div>
    </div>
  );
};

export default KatalogDverey;
