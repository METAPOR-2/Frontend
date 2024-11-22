import React from "react";
import AiIcon from "../assets/icons/AiIcon.svg";
import Location from "../assets/icons/locationIcon.svg";
import Logo from "../assets/images/Logo.svg";
import NavBar from "../components/NavBar";

export default function DoctorHome() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
      <div className="relative flex flex-col w-[390px] h-[844px] bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden">
        {/* 상단 로고 및 섹션 */}
        <header className="w-full mt-[70px] mb-[48px] flex flex-col items-center">
          <img src={Logo} alt="Chat" className="w-[103px] " />
        </header>

        {/* 일정관리 섹션 */}
        <section className="px-6 mb-10">
          <h2 className="text-[22px] font-semibold mb-[18px]">일정관리</h2>

          {/* AI 루틴 */}
          <div className="flex items-center justify-between bg-white border border-[#3F35FF] rounded-[12px] p-3 mb-4">
            <div className="flex items-center gap-3">
              <img src={AiIcon} className="w-[20px]" />
              <p className="text-[#3F35FF] font-semibold text-[18px]">
                Ai 루틴
              </p>
            </div>
          </div>
          <p className="text-[12px] font-normal text-gray-400 text-right mb-4">
            Ai를 활용하여 효율적으로 고객을 관리하세요!
          </p>

          {/* 신청 목록 */}
          <div className="bg-[#F9F9FF] rounded-lg p-4 mb-2 w-[334px] h-[135px]">
            <div className="flex justify-between">
              <p className="text-sm text-[#1B12C7] mb-2">11월 21일 토요일</p>
              <img src={Location} className="w-[15px] h-[15px]"></img>
              {/* <p className="text-sm text-[#1B12C7] mb-2">dddd</p> */}
            </div>
            <h3 className="text-[20px] font-semibold mb-2">
              {`{username}`}님의 신청
            </h3>
            <div className="flex gap-2">
              <button className="text-black bg-white border border-[#4A58E2] rounded-full w-[63px] h-[26px] px-2 text-[11px] mr-[16px]">
                치료이름
              </button>
              <button className="text-black border bg-white border-[#4A58E2] rounded-full w-[63px] h-[26px] px-2 text-[11px]">
                치료이름
              </button>
            </div>
            <p className="text-[12px] text-gray-400 font-normal text-right">
              자세히 보기
            </p>
          </div>
        </section>

        {/* 신청관리 섹션 */}
        <section className="px-6 mb-5">
          <div className="flex justify-between items-center">
            <h2 className="text-[22px] font-semibold mb-4 flex items-center">
              신청관리{" "}
              <span className="bg-[#3F35FF] text-white font-extrabold text-[11px] px-2 py-1 ml-2 rounded-full">
                3
              </span>
            </h2>
            <p className="text-[12px] text-gray-400 font-normal mr-2">더보기</p>
          </div>

          {/* 신청 카드 */}
          <div className="bg-white border border-[#D0D4FF] rounded-[12px] p-3 mb-4 w-[334px] h-[68px]">
            <div className="flex justify-between">
              <p className="text-[12px] text-[#1B12C7]">11월 28일 토요일</p>
              <img src={Location} className="w-[15px] h-[15px]"></img>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[18px] text-[#1B12C7] font-semibold">
                {`{username}`}님의 신청
              </p>
              <p className="text-[12px] text-gray-400 font-normal">
                자세히 보기
              </p>
            </div>
          </div>
          <div className="bg-white border border-[#D0D4FF] rounded-[12px] p-3 mb-4 w-[334px] h-[68px]">
            <div className="flex justify-between">
              <p className="text-[12px] text-[#1B12C7]">12월 05일 토요일</p>
              <img src={Location} className="w-[15px] h-[15px]"></img>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[18px] text-[#1B12C7] font-semibold">
                {`{username}`}님의 신청
              </p>
              <p className="text-[12px] text-gray-400 font-normal">
                자세히 보기
              </p>
            </div>
          </div>
        </section>

        {/* Q&A 섹션 */}
        <section className="px-6">
          <h2 className="text-[22px] font-semibold">Q&A</h2>
        </section>

        {/* 하단 네비게이션 바 */}
        <NavBar />
      </div>
    </div>
  );
}
