import Button from "../components/button";
import { useState } from "react";
import Logo from "../assets/images/Logo.svg";
import Input from "../components/input";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigator = useNavigate();
  const hadleLogin = () => {
    navigator("/select");
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative flex flex-col w-[390px] h-[844px] border border-gray-300 shadow-lg rounded-lg overflow-hidden">
        <main className="flex-grow w-full p-4  flex items-center justify-center flex-col gap-20">
          <img src={Logo} alt="Logo" className="w-45 h-8 mb-4" />
          <div className="flex items-center justify-center flex-col gap-7">
            <Input placeholder="아이디를 입력하세요" />
            <Input placeholder="비밀번호를 입력하세요" />
            <div className="w-full flex justify-end pr-4 text-gray-700">
              회원가입 / 비밀번호 찾기
            </div>
          </div>
          <Button children={"로그인"} onClick={hadleLogin} />
        </main>
      </div>
    </div>
  );
}
