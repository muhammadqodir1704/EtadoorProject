import React, { useState } from "react";
import { ImHome } from "react-icons/im";
import { FaUserFriends, FaVideo, FaFilm, FaRegNewspaper } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation(); // Hozirgi path-ni olish uchun
  const [activeLink, setActiveLink] = useState(location.pathname);

  const links = [
    { path: "dashboardHome", label: "Home", icon: <ImHome /> },
    { path: "shorts", label: "Shorts", icon: <FaRegNewspaper /> },
    { path: "obunachilar", label: "Obunachilar", icon: <FaUserFriends /> },
    { path: "animelar", label: "Animelar", icon: <FaFilm /> },
    { path: "trailerlar", label: "Trellerlar", icon: <FaVideo /> },
  ];

  return (
    <div className="bg-[#272246] h-[663px] rounded-[11px] py-3 px-5">
      <div className="flex flex-col gap-3">
        {links.map((link) => (
          <Link
            to={link.path}
            key={link.path}
            className="w-full"
            onClick={() => setActiveLink(link.path)}
          >
            <button
              className={`flex items-center gap-3 w-full rounded-[12px] px-3 py-3 text-white ${
                activeLink === link.path ? "bg-[#474668]" : "bg-transparent"
              }`}
            >
              {link.icon}
              {link.label}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
