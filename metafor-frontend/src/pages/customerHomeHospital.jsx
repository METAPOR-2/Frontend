import Button from "../components/button";
import { useState } from "react";
import Logo from "../assets/images/Logo.svg";
import Input from "../components/input";
import { useNavigate } from "react-router-dom";
import Circle from "../components/circle";
import NavBar from "../components/NavBar";
import DoctorInfo from "../components/doctorinfo";
import SearchIcon from "../assets/icons/Search.svg";
import FilterIcon from "../assets/icons/Filter.svg";
import DoctorCard from "../components/doctorCard";
import Doctor3 from "../assets/images/Doctor3.svg";
import Doctor4 from "../assets/images/Doctor4.svg";
import Doctor5 from "../assets/images/Doctor5.svg";

export default function CustomerHomeHospital() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
      <div className="relative flex flex-col w-[390px] h-[844px] bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden">
        <header className="w-full mt-[70px] mb-[48px] flex flex-col items-center">
          <img src={Logo} alt="Chat" className="w-[103px] " />
        </header>
        <div className="flex items-center justify-center flex-col gap-2 ">
          <Input Icon2={SearchIcon} />
          <div className="flex flex-row gap-2 w-full flex justify-start pl-7 pt-3">
            <div className="inline-flex h-[26px] pl-[10px] pr-[12px] py-[5px] justify-center items-center gap-1 flex-shrink-0 rounded-[8px] border border-[#C0C5FF] text-[#3F35FF] text-[11px] font-[500] leading-[14px] text-center bg">
              <img src={FilterIcon} />
              필터
            </div>
            <div className="inline-flex h-[26px] px-[12px] py-[5px] justify-center items-center gap-[10px] flex-shrink-0 rounded-[8px] border border-[#C0C5FF] text-[#3F35FF] text-[11px] font-[500] leading-[14px] text-center ">
              12명
            </div>
            <div className="inline-flex h-[26px] px-[12px] py-[5px] justify-center items-center gap-[10px] flex-shrink-0 rounded-[8px] border border-[#C0C5FF] text-[#3F35FF] text-[11px] font-[500] leading-[14px] text-center ">
              뜸 치료
            </div>
            <div className="inline-flex h-[26px] px-[12px] py-[5px] justify-center items-center gap-[10px] flex-shrink-0 rounded-[8px] border border-[#C0C5FF] text-[#3F35FF] text-[11px] font-[500] leading-[14px] text-center ">
              부항치료
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <DoctorCard
              image={Doctor3}
              name={"김동래"}
              hospital={"동래한방병원"}
              stack1={"뜸 치료"}
              stack2={"침 치료"}
            />
            <DoctorCard
              image={Doctor4}
              name={"오명준"}
              hospital={"오케이한방병원"}
              stack1={"부항 치료"}
              stack2={"침 치료"}
            />
            <DoctorCard
              image={Doctor5}
              name={"김한빛"}
              hospital={"솔빛한방병원"}
              stack1={"추나요법"}
              stack2={"침 치료"}
            />
          </div>

          <NavBar num={3} />
        </div>
      </div>
    </div>
  );
}
