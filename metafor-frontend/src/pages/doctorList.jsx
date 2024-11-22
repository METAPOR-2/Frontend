import React from "react";
import Logo from "../assets/images/Logo.svg";
import NavBar from "../components/NavBar";

export default function DoctorList() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
      <div className="relative flex flex-col w-[390px] h-[844px] bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden items-center">
        {/* 상단 로고 및 섹션 */}
        <header className="w-full mt-[70px] mb-[48px] flex flex-col items-center">
          <img src={Logo} alt="Chat" className="w-[103px] " />
        </header>

        <div className="w-[334px] h-[155px] bg-white border border-[#F0F1FF] rounded-[12px]">

        </div>

        {/* 하단 네비게이션 바 */}
        <NavBar />
      </div>
    </div>
  );
}
