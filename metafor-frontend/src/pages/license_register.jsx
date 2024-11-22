import React from "react";
import Button from "../components/button";
import Circle from "../components/circle";
import Input from "../components/input";
import { useNavigate } from "react-router-dom";

// 아이콘 파일 가져오기
import CameraIcon from "../assets/icons/CameraIcon.svg";
import writeIcon from "../assets/icons/writeIcon.svg";

export default function LicenseRegister() {
  const navigator = useNavigate();
  const handleBtn = () => {
    navigator("/doctorprofile");
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col w-[390px] h-[844px] bg-gray-50 border border-gray-300 shadow-lg rounded-lg overflow-hidden">
        <main className="flex-grow w-full p-4 flex items-center justify-center flex-col">
          <Circle page={2}></Circle>
          <h1 className="text-2xl font-bold mt-[126px]">
            의료면허증을 등록해주세요.
          </h1>
          <form>
            <div className="mt-[86px]"></div>
            {/* 사진 업로드하기 */}
            <Input placeholder="사진 업로드하기" Icon={CameraIcon} />
            <div className="mt-[51px]"></div>
            {/* 직접 입력하기 */}
            <Input placeholder="직접 입력하기" Icon={writeIcon} />
            <div className="mt-[264px]"></div>
            <Button onClick={handleBtn}>등록하기</Button>
          </form>
        </main>
      </div>
    </div>
  );
}
