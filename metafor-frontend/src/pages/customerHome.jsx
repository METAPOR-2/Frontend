import Button from "../components/button";
import { useState } from "react";
import Logo from "../assets/images/Logo.svg";
import Input from "../components/input2";
import { useNavigate } from "react-router-dom";
import Circle from "../components/circle";
import NavBar from "../components/NavBar";
import DoctorInfo from "../components/doctorinfo";
import SearchIcon from "../assets/icons/Search.svg";

export default function CustomerHome() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
      <div className="relative flex flex-col w-[390px] h-[844px] bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden">
        <header className="w-full mt-[70px] mb-[48px] flex flex-col items-center">
          <img src={Logo} alt="Chat" className="w-[103px] " />
        </header>
        <div className="flex items-center justify-center flex-col gap-2 ">
          <Input
            placeholder="어떤 치료가 필요하세요?"
            Icon2={SearchIcon}
            doctor={1}
          />
          <div className="text-[#1B12C7] text-[12px] w-full flex justify-start  pl-12">
            가장 많이 검색된 치료에요.
          </div>
          <div className="flex flex-row gap-2 w-full flex justify-start justify-start pl-12">
            <div className="inline-flex h-[26px] px-[15px] py-[5px] justify-center items-center gap-[10px] flex-shrink-0 rounded-[13px] border border-[#5260FF] text-[#000] text-[11px] font-[500] leading-[14px] text-center ">
              물리치료
            </div>
            <div className="inline-flex h-[26px] px-[15px] py-[5px] justify-center items-center gap-[10px] flex-shrink-0 rounded-[13px] border border-[#5260FF] text-[#000] text-[11px] font-[500] leading-[14px] text-center ">
              부항치료
            </div>
            <div className="inline-flex h-[26px] px-[15px] py-[5px] justify-center items-center gap-[10px] flex-shrink-0 rounded-[13px] border border-[#5260FF] text-[#000] text-[11px] font-[500] leading-[14px] text-center ">
              도수치료
            </div>
          </div>
          <div className="text-[#1F1F1F] text-[22px] font-semibold leading-normal w-full flex justify-start  pl-12 pt-8">
            핫한 의료진이에요.
          </div>
          <div className="flex flex-row gap-5 pl-8">
            <DoctorInfo />
            <DoctorInfo num={2} />
          </div>

          <div className="text-[#1F1F1F] text-[22px] font-semibold leading-normal w-full flex justify-start  pl-12 pt-11">
            가까운 의료원이에요.
          </div>
          {[...Array(2)].map((_, index) => (
            <div
              key={index}
              className="w-[334px] h-[68px] bg-[#F7F8FF] rounded-lg p-4 mb-4 flex justify-between items-center relative"
            >
              <div>
                <p className="text-sm text-[#3F35FF] mb-2">서울특별시 마포구</p>
                <h3 className="text-md font-semibold">이소님의 신청</h3>
              </div>
              <button className="absolute top-2 right-4 text-[#9B9B9B] text-sm">
                자세히 보기
              </button>
              <div className="absolute top-10 text-sm text-gray-500 right-4">
                ★ 4.5 (48)
              </div>
            </div>
          ))}
        </div>

        <NavBar num={3} />
      </div>
    </div>
  );
}
