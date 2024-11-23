import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CalendarImg from "../assets/images/Calendar.svg";
import Logo from "../assets/images/Logo.svg";
import NavBar from "../components/NavBar";

export default function Calendar() {
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();
  const handleBtn = () => {
    navigate("/Customerhomehospital", { state: { data: state.data } });
  };
  const LogoClick = () => {
    navigate("/ending-page");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
      <div className="relative flex flex-col w-[390px] h-[844px] bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden items-center">
        {/* 상단 로고 및 섹션 */}
        <header className="w-full mt-[70px] mb-[48px] flex flex-col items-center">
          <img
            src={Logo}
            alt="Chat"
            className="w-[103px] cursor-pointer"
            onClick={LogoClick}
          />
        </header>
        <img src={CalendarImg} className="w-[334px] h-[333px]" />
        <div className="text-[#1F1F1F] text-[18px] font-semibold leading-normal w-full flex justify-start  pl-12 pt-11">
          <span className="text-[#1B12C7]">[12월 13일 금요일]</span>의 <br />
        </div>
        <div className="text-[#1F1F1F] text-[18px] font-semibold leading-normal w-full flex justify-start  pl-12">
          예약정보에요.
        </div>
        <div className="w-[334px] h-[90px] bg-[#F7F8FF] rounded-lg px-5 py-6 mb-4 flex justify-between items-center relative mt-10">
          <div>
            <p className="text-sm text-[#3F35FF] mb-2">12월 13일 금요일</p>
            <h3 className="text-lg font-semibold">한석원 의료진</h3>
          </div>
          <button className="absolute top-4 right-4 text-[#3F35FF] text-sm">
            서울시 마포구
          </button>
          <div className="absolute top-16 text-sm text-gray-500 right-4">
            자세히보기
          </div>
        </div>

        {/* 하단 네비게이션 바 */}
        <NavBar num={4} />
      </div>
    </div>
  );
}
