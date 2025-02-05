import axios from "axios";
import React, { useEffect, useState } from "react";
import { aniDubApi } from "../../Api/Api";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

function ShortsD() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(aniDubApi)
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="bg-[#272246] text-white w-full h-full rounded-[11px] py-3 px-5">
      <div className="overflow-y-auto Bacground h-[570px] relative">
        <table className="w-full mt-0">
          <thead className="w-full sticky top-1 bg-[#474668] z-10">
            <tr>
              <th className="px-4 py-2">
                {" "}
                <input type="checkbox" />
              </th>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Rasmi</th>
              <th className="px-4 py-2">Nomi</th>
              <th className="px-4 py-2">Url</th>
              <th className="px-4 py-2">Tahrirlash</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className=" mt-10 cursor-pointer hover:translate-x-1 translate-y-3 duration-300"
              >
                <td className="px-4 py-2 text-center">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-2 text-center">{index + 1}</td>
                <td className="px-4 py-2 text-center">
                  <img
                    src={item.img}
                    alt={item.name || "Image"}
                    className="w-14 h-14 object-cover rounded-xl"
                  />
                </td>
                <td className="px-4 py-2">{item.name || "N/A"}</td>
                <td className="px-4 py-2 text-center">
                  {item.Director || "N/A"}
                </td>
                <td className="px-4 py-2 text-center">
                  <div className="flex items-center gap-3">
                    <CiEdit className=" size-[22px]" />
                    <MdDelete className=" size-[20px] text-red-600" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShortsD;
