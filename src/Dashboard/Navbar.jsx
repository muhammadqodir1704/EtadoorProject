import React, { useEffect, useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function Navbar() {
  const [profileImg, setProfileImg] = useState("");

  useEffect(() => {
    const savedImages = JSON.parse(localStorage.getItem("profileImages")) || {};
    setProfileImg(
      savedImages.profileImg ||
        "https://winaero.com/blog/wp-content/uploads/2018/08/Windows-10-user-icon-big.png"
    );
  }, []);
  return (
    <div className=" bg-[#272246] w-full ">
      <div>
        <div className=" flex items-center justify-between mt-3 w-full">
          <div>
            <Link to={"/"}>
              <img
                className=" w-full h-[33px]"
                src="https://anilife.vercel.app/static/media/aniDub_logo.68c1d6b51d579e3f658b.png"
              />
            </Link>
          </div>
          <div className=" flex items-center gap-2">
            <IoSettingsSharp className=" size-[25px]" />
            <Link to={"/profil"}>
              <img
                className="w-[42px] h-[42px] rounded-full"
                src={profileImg}
                alt="Avatar"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
