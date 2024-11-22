import React from "react";
import addIcon from "../assets/icons/addIcon.svg";
import decreaseIcon from "../assets/icons/decreaseIcon.svg";
import Logo from "../assets/images/Logo.svg";
import NavBar from "../components/NavBar";
import Button from "../components/button";
import Input from "../components/input";

export default function DoctorSearch() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
      <div className="relative flex flex-col w-[390px] h-[844px] bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden items-center">
        {/* 상단 로고 및 섹션 */}
        <header className="w-full mt-[70px] mb-[48px] flex flex-col items-center">
          <img src={Logo} alt="Chat" className="w-[103px] " />
        </header>
        <Input placeholder="어떤 치료가 필요하세요?"></Input>

        <div className="w-[334px] h-max mt-3 mb-5 p-4 bg-white border border-[#F0F1FF] rounded-[12px]">
          <p className="text-[12px] font-normal text-[#1B12C7] mb-2">
            '한방' 치료에 관련된 치료들이에요.
          </p>
          <div className="flex gap-2 mb-8">
            <button className="text-black bg-white border border-[#4A58E2] rounded-[8px] w-[63px] h-[26px] px-2 text-[11px]">
              뜸 치료
            </button>
            <button className="text-black border bg-white border-[#4A58E2] rounded-[8px] w-[63px] h-[26px] px-2 text-[11px]">
              침 치료
            </button>
            <button className="text-black border bg-white border-[#4A58E2] rounded-[8px] w-[63px] h-[26px] px-2 text-[11px]">
              부항치료
            </button>
          </div>
          <div className="flex justify-between items-center mb-4">
            <p className="text-[18px] font-semibold mr-10">인원</p>
            <img src={decreaseIcon} className="h-[25px]"></img>
            <p className="text-[18px] font-semibold">12명</p>
            <img src={addIcon} className="h-[25px]"></img>
          </div>
          <div className="flex justify-between items-center mb-4">
            <p className="text-[18px] font-semibold mr-10">날짜</p>
            <p className="text-[18px] font-semibold mr-14">11월 22일</p>
          </div>
        </div>
        <Button>예약 가능한 의료진 찾기</Button>

        {/* 하단 네비게이션 바 */}
        <NavBar />
      </div>
    </div>
  );
}
