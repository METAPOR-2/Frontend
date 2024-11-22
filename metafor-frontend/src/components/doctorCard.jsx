import React from "react";
import { useNavigate } from "react-router-dom";

export default function DoctorCard({ image, name, hospital, stack1, stack2 }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/doctor-detail"); // 필요한 데이터를 state로 전달
  };
  return (
    <div
      className="max-w-sm rounded-lg border border-[#F0F1FF] bg-white py-2 w-80 flex items-center justify-center cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex items-center">
        <div className="pr-2">
          <img className="w-18 h-16 rounded-[12px]" src={image} alt="Doctor" />
        </div>
        <div className="flex flex-col relative ml-1 ">
          <div className="flex flex-row gap-2 items-end">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-gray-500 text-sm mt-3">{hospital}</p>
            <div className="pl-6 mt-3 text-[#3F35FF]">♡</div>
          </div>
          <div className="flex items-center text-[#3F35FF]">
            <span>★</span>
            <span className="ml-1">4.6 (41)</span>
          </div>

          <div className="mt-2 flex space-x-2">
            <div className="inline-flex h-[26px] px-[12px] py-[5px] justify-center items-center gap-[10px] flex-shrink-0 rounded-[8px] border border-[#3F35FF] text-[#3F35FF] text-[11px] font-medium leading-[14px] text-center">
              {stack1}
            </div>
            <div className="inline-flex h-[26px] px-[12px] py-[5px] justify-center items-center gap-[10px] flex-shrink-0 rounded-[8px] border border-[#3F35FF] text-[#3F35FF] text-[11px] font-medium leading-[14px] text-center ">
              {stack2}
            </div>
          </div>
          <div className="mt-3">
            <div className="absolute right-[0.1px] top-[93px] text-[#9B9B9B] text-xs">
              자세히 보기
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
