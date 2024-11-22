import React from "react";
import Button from "../components/button";
import Circle from "../components/circle";
import Input from "../components/input";

export default function LicenseRegister() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col w-[390px] h-[844px] bg-gray-50 border border-gray-300 shadow-lg rounded-lg overflow-hidden">
        <main className="flex-grow w-full p-4  flex items-center justify-center flex-col">
          <Circle page={2}></Circle>
          <h1 className="text-2xl font-bold mt-[126px]">
            의료면허증을 등록해주세요.
          </h1>
          <form>
            <div className="mt-[86px]"></div>
            <Input placeholder="사진 업로드하기"></Input>
            <div className="mt-[51px]"></div>
            <Input placeholder="직접 입력하기"></Input>
            <div className="mt-[264px]"></div>
            <Button>등록하기</Button>
          </form>
        </main>
      </div>
    </div>
  );
}
