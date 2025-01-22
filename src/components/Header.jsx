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
    <div className="border-b">
      <div style={{ width: 1410, height: 39, top: 153, gap: 1 }} className=" mx-auto flex justify-around bg-gray-100 rounded-md">
        {tabs.map((tab) => (
          <Link
            key={tab.name}
            to={tab.path}
            style={{
              fontSize: "14px",
              fontWeight: 700,
              width: 200,
              height: 39,
              top: 10,
              right: 35,
              bottom: 10,
              left: 35,
              gap: 10,
            }}
            className={`relative cursor-pointer px-4 py-2 font-bold text-sm rounded-md ${activeTab === tab.name
              ? "bg-red-500 text-white "
              : "text-gray-700"
              }`}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.name}
            {tab.name === "Каталог дверей" && activeTab === tab.name && (
              <span className="absolute top-full left-1/2 transform -translate-x-1/2 text-xs mt-1">

              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
