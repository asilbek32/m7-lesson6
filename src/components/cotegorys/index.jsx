import React from "react";
import "./style.css";
import { FaChevronLeft } from "react-icons/fa";

function Categorys({children}) {
  const colors = [
    { name: "Jigarrang", color: "#8B4513" },
    { name: "Qizil", color: "#FF0000" },
    { name: "Yashil", color: "#008000" },
    { name: "Xagi", color: "#4B0082" },
    { name: "Pushti", color: "#FFC0CB" },
    { name: "Sariq", color: "#FFD700" },
    { name: "Kulrang", color: "#808080" },
  ];
  return (
    <div className=" flex justify-between">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-[#1f2026] text-[16px] font-medium">Turkumlar</h2>
          <div>
            <div className="flex items-center  gap-1">
              <FaChevronLeft />
              <h3 className="text-start mb-3">Barcha turkumlar</h3>
            </div>
            <div className="flex flex-col gap-2 pl-4 category">
              {[
                "Elektronika",
                "Elektroniklar uchun aksessuarlar",
                "Kompyuter texnikasi",
                "Quloqchinlar va audio texnikalar",
                "Optik anjomlar",
                "Ofis texnikasi",
                "Smartfonlar va telefonlar",
                "Televizorlar va videotexnikalar",
                "Aqlli uy va xavfsizlik",
                "Foto va video texnika",
              ].map((item, index) => (
                <p
                  key={index}
                  className="px-4 py-1 rounded-[5px] cursor-pointer text-start hover:bg-gray-300 transition-colors duration-200 w-full"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4">
          <h2 className="text-[#1f2026] text-[16px] font-medium">
            Narx, baho, so'm
          </h2>
          <div className="flex flex-col gap-2 pl-4 category">
            <div className="flex justify-between items-center gap-3">
              <div className="flex flex-col">
                <label className="text-sm text-gray-500">dan</label>
                <input
                  type="number"
                  placeholder="3000"
                  className="border border-gray-300 rounded-md p-1 w-28 text-center focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-gray-500">gacha</label>
                <input
                  type="number"
                  placeholder="129999000"
                  className="border border-gray-300 rounded-md p-1 w-28 text-center focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            <div className="relative h-2">
              <div className="absolute top-1/2 -translate-y-1/2 w-full h-[4px] bg-gray-300 rounded-full"></div>

              <div className="absolute top-1/2 -translate-y-1/2 left-[20%] w-[60%] h-[4px] bg-purple-600 rounded-full"></div>

              <div className="absolute top-1/2 -translate-y-1/2 left-[20%] w-5 h-5 bg-white border-2 border-purple-600 rounded-full shadow-md"></div>
              <div className="absolute top-1/2 -translate-y-1/2 left-[80%] w-5 h-5 bg-white border-2 border-purple-600 rounded-full shadow-md"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4">
          <h2 className="text-[#1f2026] text-[16px] font-medium">Rang</h2>
          <div>
            <div className="flex flex-col gap-2 pl-4 category">
              {colors.map((item, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <div
                    className="w-[20px] h-[20px] rounded-full border border-gray-300"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <p className="cursor-pointer text-start">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

export default Categorys;
