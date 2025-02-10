import React from "react";
import MainImage from "../Images/Group.svg";
import Icons1 from "../Images/Group 45 (6).svg";
import Icons2 from "../Images/Group 45 (7).svg";
import Icons3 from "../Images/Group 45 (8).svg";
import Icons4 from "../Images/Group 45 (9).svg";
import Icons5 from "../Images/Group 45 (10).svg";
import { Link } from "react-router-dom";
const MainPage = () => {
  return (
    <div className="container mx-auto">
      <Link to={"/"}>Главная</Link>{" "}
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <h1
            style={{ fontSize: 48, fontWeight: 700 }}
            className="text-4xl font-bold font-noto-sans-georgian">
            Влагостойкие композитные <br />
            <span style={{ marginTop: '1.5rem', display: 'block' }}>двери Etadoor</span>
          </h1>

          <div className="flex justify-between mt-16">
            <div className="flex flex-col items-center">
              <img src={Icons1} alt="" />
              <p className="mt-2">Влагостойкость</p>
            </div>

            <div className="flex flex-col items-center">
              <img src={Icons2} alt="" />
              <p className="mt-2">Звукоизоляция</p>
            </div>

            <div className="flex flex-col items-center">
              <img src={Icons3} alt="" />
              <p className="mt-2">Теплоизоляция</p>
            </div>

            <div className="flex flex-col items-center">
              <img src={Icons4} alt="" />
              <p className="mt-2">Надежность</p>
            </div>

            <div className="flex flex-col items-center">
              <img src={Icons5} alt="" />
              <p className="mt-2">Безопасность</p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-end">
          <img src={MainImage} alt="Etadoor" />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
