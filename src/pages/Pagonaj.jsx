import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Pagonaj = () => {
  const columns = [
    {
      id: 1,
      title: "Softwood Panel Moulding",
      size: "100x25",
      article: "M-18702",
      price: 110.94,
      quantity: 285,
      description:
        "Exquisite Panel Moulding Softwood crafted from premium material. Adds elegance to any room. Resistant to warping.",
      imagesUrl: [
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858",
      ],
      sellerId: 3,
      validSizeFormat: true,
    },
    {
      id: 3,
      title: "Hardwood Panel Moulding",
      size: "150x18",
      article: "M-75809",
      price: 20.22,
      quantity: 404,
      description:
        "Premium Hardwood Panel Moulding. Excellent paint adhesion. Adds elegance to any room. Durable and long-lasting.",
      imagesUrl: [
        "https://images.unsplash.com/photo-1600585153490-76fb20a32601",
        "https://images.unsplash.com/photo-1513694203232-719a280e022f",
      ],
      sellerId: 3,
      validSizeFormat: true,
    },
    {
      "id": 4,
      "title": "PVC Panel Moulding Moulding",
      "size": "150x18",
      "article": "M-26422",
      "price": 150.1,
      "quantity": 315,
      "description": "Exquisite Panel Moulding PVC crafted from premium PVC material. Perfect for traditional and modern spaces. Resistant to warping.",
      "imagesUrl": [
        "https://images.unsplash.com/photo-1513694203232-719a280e022f",
        "https://images.unsplash.com/photo-1513694203232-719a280e022f"
      ],
      "sellerId": 3,
      "validSizeFormat": true
    },
    {
      "id": 5,
      "title": "Hardwood Chair Rail Moulding",
      "size": "150x18",
      "article": "M-40304",
      "price": 33.92,
      "quantity": 469,
      "description": "Exquisite Chair Rail Hardwood crafted from premium Hardwood material. Durable and long-lasting. Easy to install.",
      "imagesUrl": [
        "https://images.unsplash.com/photo-1600585153490-76fb20a32601"
      ],
      "sellerId": 3,
      "validSizeFormat": true
    },
    {
      "id": 6,
      "title": "Hardwood Chair Rail Moulding",
      "size": "90x30",
      "article": "M-69814",
      "price": 179.28,
      "quantity": 175,
      "description": "Exquisite Chair Rail Hardwood crafted from premium Hardwood material. Excellent paint adhesion. Easy to install. Durable and long-lasting.",
      "imagesUrl": [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
      ],
      "sellerId": 3,
      "validSizeFormat": true
    },
    {
      "id": 7,
      "title": "Composite Rope Moulding Moulding",
      "size": "75x38",
      "article": "M-47979",
      "price": 139.72,
      "quantity": 76,
      "description": "Exquisite Rope Moulding Composite crafted from premium Composite material. Perfect for traditional and modern spaces. Durable and long-lasting. Resistant to warping.",
      "imagesUrl": [
        "https://images.unsplash.com/photo-1513694203232-719a280e022f",
        "https://images.unsplash.com/photo-1600585153490-76fb20a32601"
      ],
      "sellerId": 3,
      "validSizeFormat": true
    },
    {
      "id": 8,
      "title": "MDF Egg and Dart Moulding",
      "size": "75x38",
      "article": "M-36625",
      "price": 88.61,
      "quantity": 91,
      "description": "Exquisite Egg and Dart MDF crafted from premium MDF material. Excellent paint adhesion. Resistant to warping. Adds elegance to any room.",
      "imagesUrl": [
        "https://images.unsplash.com/photo-1600585153490-76fb20a32601",
        "https://images.unsplash.com/photo-1600585153490-76fb20a32601"
      ],
      "sellerId": 3,
      "validSizeFormat": true
    },
    {
      "id": 9,
      "title": "Pine Panel Moulding Moulding",
      "size": "100x25",
      "article": "M-75304",
      "price": 47.66,
      "quantity": 168,
      "description": "Exquisite Panel Moulding Pine crafted from premium Pine material. Excellent paint adhesion. Perfect for traditional and modern spaces. Resistant to warping.",
      "imagesUrl": [
        "https://images.unsplash.com/photo-1513694203232-719a280e022f",
        "https://images.unsplash.com/photo-1600585152220-90363fe7e115"
      ],
      "sellerId": 3,
      "validSizeFormat": true
    },
    {
      "id": 10,
      "title": "Plastic Egg and Dart Moulding",
      "size": "90x30",
      "article": "M-89788",
      "price": 137.44,
      "quantity": 467,
      "description": "Exquisite Egg and Dart Plastic crafted from premium Plastic material. Perfect for traditional and modern spaces. Durable and long-lasting. Adds elegance to any room.",
      "imagesUrl": [
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d"
      ],
      "sellerId": 3,
      "validSizeFormat": true
    },
    {
      "id": 11,
      "title": "Foam Baseboard Moulding",
      "size": "150x18",
      "article": "M-65894",
      "price": 84.84,
      "quantity": 173,
      "description": "Exquisite Baseboard Foam crafted from premium Foam material. Perfect for traditional and modern spaces. Durable and long-lasting.",
      "imagesUrl": [
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858"
      ],
      "sellerId": 3,
      "validSizeFormat": true
    },
    {
      "id": 9,
      "title": "Pine Panel Moulding Moulding",
      "size": "100x25",
      "article": "M-75304",
      "price": 47.66,
      "quantity": 168,
      "description": "Exquisite Panel Moulding Pine crafted from premium Pine material. Excellent paint adhesion. Perfect for traditional and modern spaces. Resistant to warping.",
      "imagesUrl": [
        "https://images.unsplash.com/photo-1513694203232-719a280e022f",
        "https://images.unsplash.com/photo-1600585152220-90363fe7e115"
      ],
      "sellerId": 3,
      "validSizeFormat": true
    },
    {
      "id": 10,
      "title": "Plastic Egg and Dart Moulding",
      "size": "90x30",
      "article": "M-89788",
      "price": 137.44,
      "quantity": 467,
      "description": "Exquisite Egg and Dart Plastic crafted from premium Plastic material. Perfect for traditional and modern spaces. Durable and long-lasting. Adds elegance to any room.",
      "imagesUrl": [
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d"
      ],
      "sellerId": 3,
      "validSizeFormat": true
    },
  ];

  return (
    <div className="container mx-auto p-6 min-h-screen rounded-lg">
      <div className="flex items-center px-10 mb-6">
        <Link to="/" className="text-black hover:underline">
          Главная |
        </Link>
        <span className="text-base text-stone-400"> Погонаж</span>
      </div>
      <h1 className="px-10 mb-6 text-2xl font-normal md:text-4xl">Погонаж</h1>
      <div className="grid grid-cols-1 gap-6 px-10 mb-6 cursor-pointer sm:grid-cols-3 md:grid-cols-4">
        {columns.map((item, index) => (
          <div
            key={index}
            className="p-4 transition duration-300 ease-out bg-white border rounded-lg shadow-md hover:shadow-xl hover:scale-105"
          >
            <img
              src={item.imagesUrl[0]}
              alt={item.title}
              className="object-cover w-full h-48 rounded-md"
            />
            <div className="mt-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.size} | {item.article}</p>
              <p className="mt-2 text-lg font-bold text-gray-800">${item.price}</p>
              <p className="text-sm text-gray-600">Stock: {item.quantity}</p>
              <p className="mt-2 text-xs text-gray-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <Footer /> */}
      {/* components */}
    </div>
  );
};

export default Pagonaj;