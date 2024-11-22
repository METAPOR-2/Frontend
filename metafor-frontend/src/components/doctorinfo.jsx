import React from "react";
import Doctor1 from "../assets/images/Doctor1.svg";
import Doctor2 from "../assets/images/Doctor2.svg";
import { useNavigate } from "react-router-dom";

export default function DoctorInfo({ num = 1 }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/doctor-detail"); // 필요한 데이터를 state로 전달
  };
  return (
    <div
      className="max-w-sm rounded overflow-hidden border border-[#F0F1FF] bg-white px-2 py-3 w-[180px] h-[230px] mt-2 cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex items-center flex-col">
        <div className="flex-shrink-0">
          <img
            className="w-[150px] h-[90px] rounded-[13px]"
            src={`${num == 1 ? Doctor1 : Doctor2}`}
            alt="Doctor"
          />
        </div>
        <div className="">
          <div className="flex flex-row pt-2 gap-5">
            <h2 className="text-base font-bold">{`${
              num == 1 ? "한석원" : "현우진"
            }`}</h2>
            <p className="text-xs text-gray-400">의료진</p>
          </div>
          <p className="text-xs text-gray-700">{`${
            num == 1 ? "인애한의원" : "아나파한방병원"
          }`}</p>
        </div>
      </div>
      <div className="flex flex-row relative">
        <button className="absolute text-xs top-10 rounded-[8px] border border-[#8486FF] py-1 px-3 rounded">
          예약하기
        </button>
        <button className="absolute top-12 left-20 right-2 text-[#9B9B9B] text-xs">
          자세히 보기
        </button>
      </div>
    </div>
  );
}
