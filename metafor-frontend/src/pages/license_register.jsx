import React, { useState } from "react";
import Button from "../components/button";
import Input from "../components/input";

export default function LicenseRegister() {
  const [fileName, setFileName] = useState("선택된 파일 없음");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : "선택된 파일 없음");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-[390px] h-[844px] bg-white border border-gray-300 shadow-lg rounded-lg p-4 text-center">
        <h1 className="text-[24px] font-semibold mb-[86px] mt-40">
          의료면허증을 등록해주세요.
        </h1>
        <form>
          <div className="mb-[51px] mt-10">
            {/* 커스텀 파일 업로드 */}
            <label
              htmlFor="licenseFile"
              className="w-[334px] h-[56px] p-[20px] bg-gray-50 border border-gray-300 rounded-[12px] focus:outline-none flex items-center justify-between cursor-pointer"
            >
              <span>{fileName}</span>
              <span className="bg-[#3F35FF] text-white px-4 py-2 rounded-md text-sm">
                파일 선택
              </span>
            </label>
            <input
              id="licenseFile"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
          <Input placeholder="직접 입력하기"></Input>
          <div className="mt-[264px]"></div>
          <Button>다음</Button>
        </form>
      </div>
    </div>
  );
}
