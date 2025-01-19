import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Каталог дверей");

  const tabs = [
    { name: "Каталог дверей", path: "/" },
    { name: "Погонаж", path: "/pogonaj" },
    { name: "Фурнитура", path: "/furnitura" },
    { name: "Где купить", path: "/gde-kupit" },
    { name: "Сотрудничать", path: "/sotrudnichat" },
    { name: "О компании", path: "/o-kompanii" },
    { name: "Контакты", path: "/kontakti" },
  ];

  return (
    <div className="bg-gray-100 py-4 border-b">
      <div className="container mx-auto flex justify-around">
        {tabs.map((tab) => (
          <Link
            key={tab.name}
            to={tab.path}
            className={`relative cursor-pointer px-4 py-2 font-bold text-sm rounded-md ${
              activeTab === tab.name
                ? "bg-red-500 text-white"
                : "text-gray-700 hover:text-red-500"
            }`}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.name}
            {tab.name === "Каталог дверей" && activeTab === tab.name && (
              <span className="absolute top-full left-1/2 transform -translate-x-1/2 text-xs mt-1">
                ▼
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
