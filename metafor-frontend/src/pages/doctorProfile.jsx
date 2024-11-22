import Button from "../components/button";
import { useState } from "react";
import Logo from "../assets/images/Logo.svg";
import Input from "../components/input";
import { useNavigate } from "react-router-dom";
import Circle from "../components/circle";

export default function DoctorProfile() {
  const navigator = useNavigate();
  const hadleLogin = () => {
    navigator("/map");
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative flex flex-col w-[390px] h-[844px] border border-gray-300 shadow-lg rounded-lg overflow-hidden">
        <main className="flex-grow w-full p-4  flex items-center justify-center flex-col gap-16">
          <Circle page={3} />
          <div className="text-[24px] font-normal font-semibold leading-normal">
            의료정보를 확인할게요.
          </div>
          <div className="flex items-center justify-center flex-col">
            <div className="w-full flex justify-start pr-4 text-gray-600 font-medium">
              상호명
            </div>
            <Input />
            <div className="w-full flex justify-end pr-4 text-[#9B9B9B] text-[12px] font-normal leading-[14px] mt-1">
              수정하기
            </div>
          </div>
          <div className="flex items-center justify-center flex-col">
            <div className="w-full flex justify-start pr-4 text-gray-600 font-medium">
              의사명
            </div>
            <Input />
            <div className="w-full flex justify-end pr-4 text-[#9B9B9B] text-[12px] font-normal leading-[14px] mt-1">
              수정하기
            </div>
          </div>
          <div className="flex items-center justify-center flex-col">
            <div className="w-full flex justify-start pr-4 text-gray-600 font-medium">
              의사등록번호
            </div>
            <Input />
            <div className="w-full flex justify-end pr-4 text-[#9B9B9B] text-[12px] font-normal leading-[14px] mt-1">
              수정하기
            </div>
          </div>
          <Button children={"다음"} onClick={hadleLogin} />
        </main>
      </div>
    </div>
  );
}
