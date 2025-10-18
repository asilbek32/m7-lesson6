import React from "react";
import s from "../../assets/s.png";
import like from "../../assets/like.png";
import frame from "../../assets/Frame.png";
import logo from "../../assets/logo.svg";
import search from "../../assets/search.svg";
import logo1 from "../../assets/logo1.svg";
import arrowdawn from "../../assets/arrowdawn.svg";

function Header() {
  return (
    <div className=" px-[7px] md:px-[40px] mb-[20px]">
    
      <div className="lg:flex justify-between items-center mb-[10px] hidden">
        <img src={logo} alt="Logo" />

        <button className="flex justify-center items-center gap-x-[8px] w-[120px] h-[40px] rounded-sm bg-[#F0F0FF] text-[#7000FF]">
          <img src={logo1} alt="Katalog icon" />
          Katalog
        </button>

        <div className="flex items-center justify-between w-[40%] h-[40px] border border-solid border-[#36364033] px-[10px] rounded-sm">
          <input
            type="text"
            placeholder="Mahsulotlar va turkumlar izlash"
            className="outline-none pl-[16px] w-full"
          />
          <button className="bg-[#F2F4F7] h-full w-[79px] flex items-center justify-center">
            <img src={search} alt="Search icon" />
          </button>
        </div>

        <div className="flex gap-x-[12px]">
          <div className="flex items-center gap-x-[8px] cursor-pointer">
            <img src={frame} alt="Login icon" />
            <button>Kirish</button>
          </div>

          <div className="flex items-center gap-x-[8px] cursor-pointer">
            <img src={like} alt="Like icon" />
            <p>Saralangan</p>
          </div>

          <div className="flex items-center gap-x-[8px] cursor-pointer">
            <img src={s} alt="Cart icon" />
            <p>Savat</p>
          </div>
        </div>
      </div>

    
      <div className="lg:flex justify-between items-center hidden mb-[30px]">
        
        <p className="text-sm text-[#595B66] cursor-pointer">Elektronika</p>
        <p className="text-sm text-[#595B66] cursor-pointer">Maishiy texnika</p>
        <p className="text-sm text-[#595B66] cursor-pointer">Kiyim</p>
        <p className="text-sm text-[#595B66] cursor-pointer">Poyabzallar</p>
        <p className="text-sm text-[#595B66] cursor-pointer">Aksessuarlar</p>
        <p className="text-sm text-[#595B66] cursor-pointer">Goʻzallik va parvarish</p>
        <p className="text-sm text-[#595B66] cursor-pointer">Salomatlik</p>
        <p className="text-sm text-[#595B66] cursor-pointer">Uy-roʻzgʻor buyumlari</p>
        <p className="text-sm text-[#595B66] cursor-pointer">Qurilish va taʼmirlash</p>
        <div className="flex gap-x-[5px] cursor-pointer">
          <p>Yana</p>
          <img src={arrowdawn} alt="Arrow down" />
        </div>
      </div>
    </div>
  );
}

export default Header;
