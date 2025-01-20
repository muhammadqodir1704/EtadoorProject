import React from "react";
const MainPage = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <h1 style={{fontSize: 48 }} className="text-4xl font-bold">
            Влагостойкие композитные <br /> двери Etadoor
          </h1>
          <div className="flex justify-between mt-4">
            <div className="flex flex-col items-center">
              <img src="/Images/Group 45 (1).svg" alt="" />
              <p className="mt-2">Влагостойкость</p>
            </div>

            <div className="flex flex-col items-center">
              <img src="/Images/Group 45 (2).svg" alt="" />
              <p className="mt-2">Звукоизоляция</p>
            </div>

            <div className="flex flex-col items-center">
              <img src="/Images/Group 45 (3).svg" alt="" />
              <p className="mt-2">Теплоизоляция</p>
            </div>

            <div className="flex flex-col items-center">
              <img src="/Images/Group 45 (4).svg" alt="" />
              <p className="mt-2">Надежность</p>
            </div>

            <div className="flex flex-col items-center">
              <img src="/Images/Group 45 (5).svg" alt="" />
              <p className="mt-2">Безопасность</p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-end">
          <img src="/Images/Group.png" alt="Etadoor" />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
