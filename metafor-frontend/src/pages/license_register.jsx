import React from "react";
import Button from "../components/button";
import Input from "../components/input";

export default function LicenseRegister() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-[390px] h-[844px] bg-white border border-gray-300 shadow-lg rounded-lg p-4 text-center">
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
      </div>
    </div>
  );
}
