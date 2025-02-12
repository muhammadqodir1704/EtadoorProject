import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Xarita from "./Xarita";

const KatalogDverey = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://etadoor.up.railway.app/api/doors?page=0&size=20",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );

      console.log("Response status:", response.status);

      if (!response.ok) {
        throw new Error(`Server xatosi: ${response.status}`);
      }

      const result = await response.json();
      console.log("API dan kelgan ma'lumot:", result);

      setProducts(result.data || []);
      setLoading(false);
    } catch (error) {
      console.error("API xatolik:", error);
      setLoading(false);
    }
  };

  const ProductCard = ({ product }) => (
    <NavLink to={`/detailProducts/${product.id}`}>
      <div className="w-[330px] h-[483px] bg-white  hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col">
        <div className="relative h-[240px]">
          {product.images.length > 0 ? (
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Rasm mavjud emas</p>
            </div>
          )}
          <div className="absolute top-4 left-4 flex gap-2">
            {product.isNew && (
              <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                New
              </span>
            )}
            {product.isDiscounted && (
              <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Chegirma
              </span>
            )}
          </div>
        </div>
        <div className="p-6 flex flex-col flex-grow justify-between">
          <div>
            <h2
              style={{ fontSize: 20, fontWeight: 400 }}
              className=" mb-2 line-clamp-2 font-circe"
            >
              {product.name}
            </h2>
            <p className="text-lg text-gray-700 flex items-center">
              <p
                className="font-circe"
                style={{ fontSize: 16, fontWeight: 400 }}
              >
                Странa :
              </p>
              <hr
                style={{ color: "#00000040" }}
                className="flex-grow border-t-2 border-dashed mx-2"
              />
              <p style={{ fontSize: 16, fontWeight: 700 }}>Россия</p>
            </p>
            <p className="text-lg text-gray-700 flex items-center">
              <p
                className="font-circe"
                style={{ fontSize: 16, fontWeight: 400 }}
              >
                Наличие:
              </p>
              <hr
                style={{ color: "#00000040" }}
                className="flex-grow border-t-2 border-dashed mx-2"
              />
              <p style={{ color: "#219653", fontSize: 16, fontWeight: 700 }}>
                В наличии
              </p>
            </p>
            <p className="text-2xl font-bold text-[#a78b5a]">
              {product.finalPrice} р.
            </p>
          </div>
          <button
            style={{
              width: 160,
              height: 39,
              backgroundColor: "#A08961",
              margin: "0 auto", // markazga keltirish uchun
            }}
            className="flex items-center justify-center text-white transition-colors duration-300 font-medium mt-4"
          >
            Заказать
          </button>
        </div>
      </div>
    </NavLink>
  );

  return (
    <div className=" min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1
          style={{ fontSize: 34, fontWeight: 700 }}
          className="font-noto-sans-georgian  font-bold text-gray-900 mb-12"
        >
          Каталог дверей{" "}
        </h1>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#a78b5a] border-t-transparent"></div>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-5 justify-items-center">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
     <Xarita />
    </div>
  );
};

export default KatalogDverey;
