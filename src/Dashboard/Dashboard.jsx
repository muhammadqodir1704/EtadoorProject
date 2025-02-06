import React, { useEffect, useState } from "react";
import Trailer from "../../pages/Trailer";
import axios from "axios";
import "../../App.css";

function Dashboard({ profileImages }) {
  const [data, setdata] = useState([]);

  const [headerImg, setHeaderImg] = useState("");
  const [profileImg, setProfileImg] = useState("");

  useEffect(() => {
    // LocalStorage'dan saqlangan rasmlarni o'qish
    const savedImages = JSON.parse(localStorage.getItem("profileImages")) || {};
    setHeaderImg(savedImages.headerImg || profileImages?.headerImg || "");
    setProfileImg(savedImages.profileImg || profileImages?.profileImg || "");
  }, [profileImages]);
  useEffect(() => {
    axios.get("https://a510c4f98367eca1.mokky.dev/users").then((res) => {
      setdata(res.data);
    }, []);
  });
  return (
    <div className=" text-white w-full h-screen rounded-[11px] flex">
      {/* Main Content */}
      <div className="w-3/4 pr-4 mt-2">
        {/* Header Image */}
        <div className="relative w-full h-[250px] mb-6 rounded-[10px] overflow-hidden">
          <img
            src={
              headerImg ||
              "https://www.hdwallpapers.in/download/anime_moon_sky_window_4k_hd-3840x2160.jpg"
            }
            alt="Header"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-[#3A3357] p-4 rounded-[10px] flex items-center justify-between">
            <div>
              <p className="text-sm">Jami yoqtirishlar</p>
              <h2 className="text-2xl font-bold">50,120</h2>
            </div>
            <div className="text-blue-400 text-4xl">👍</div>
          </div>

          <div className="bg-[#3A3357] p-4 rounded-[10px] flex items-center justify-between">
            <div>
              <p className="text-sm">Jami yoqtirishlar</p>
              <h2 className="text-2xl font-bold">50,120</h2>
            </div>
            <div className="text-blue-400 text-4xl">👍</div>
          </div>

          <div className="bg-[#3A3357] p-4 rounded-[10px] flex items-center justify-between">
            <div>
              <p className="text-sm">Izohlar</p>
              <h2 className="text-2xl font-bold">20,120</h2>
            </div>
            <div className="text-red-400 text-4xl">💬</div>
          </div>
        </div>

        {/* Trailers Section */}
        <Trailer />
      </div>

      {/* Sidebar */}
      <div className="w-1/4 h-[649px] bg-[#272246] p-4 rounded-[10px]">
        <div className="flex items-center">
          <span className="bg-[#F81539] w-[6px] h-[15px] rounded-lg inline-block mr-4"></span>
          <h2 className="text-xl font-semibold text-white">Foydalanuvchilar</h2>
        </div>
        <ul className="space-y-4 overflow-y-auto Bacground h-[570px] mt-5">
          {data.map((item) => {
            return (
              <li key={item.id} className=" flex items-center gap-2">
                <div className=" relative">
                  <img
                    src={item.image}
                    alt="User"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="absolute top-0 right-0 w-[10px] h-[10px] rounded-full bg-[#34ff22] opacity-50"></div>
                </div>
                <div>
                  <p>{item.name}</p>
                  <p className="text-stone-400 text-[13px]">{item.date}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
