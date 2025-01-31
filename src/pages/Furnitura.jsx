import React, { useEffect, useState } from "react";

const Furnitura = () => {
  const [furnitura, setFurnitura] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoors = async () => {
      try {
        const response = await fetch(
          "https://etadoor.koyeb.app/api/accessories/door-accessories?page=0&size=20"
        );
        const result = await response.json();
        setFurnitura(result.data || []); // To'g'ri set qilish
        setLoading(false);
      } catch (error) {
        console.error("API xatolik:", error);
        setLoading(false);
      }
    };

    fetchDoors();
  }, []);

  return (
    <div className="container mx-auto mt-10 px-6">
      <h1 className="text-2xl font-bold mb-4">Фурнитура</h1>

      {loading ? (
        <p className="text-gray-600">Yuklanmoqda...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {furnitura.map((item) => (
            <div key={item.id} className="border rounded-lg shadow-md bg-white p-4">
              <img
                src={item.ImageUrls}
                alt={item.name}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h2 className="text-lg font-semibold mt-3">{item.name}</h2>
              <p className="text-gray-500">{item.material}</p>
              <p className="text-gray-700 my-2">{item.description}</p>
              <p className="text-lg font-semibold text-blue-600">${item.price}</p>
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Furnitura;
