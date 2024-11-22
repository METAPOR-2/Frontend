import React from "react";
import AiIcon from "../assets/icons/AiIcon.svg";
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
        <section className="px-6">
          <h2 className="text-[22px] font-semibold mb-[18px]">일정관리</h2>

          {/* AI 루틴 */}
          <div className="flex items-center justify-between bg-white border border-[#3F35FF] rounded-lg p-3 mb-3">
            <div className="flex items-center gap-3">
              <img src={AiIcon} className="w-[20px]" />
              <p className="text-[#3F35FF] font-semibold text-[18px]">
                Ai 루틴
              </p>
            </div>
          </div>
          <p className="text-[12px] font-normal text-gray-400 text-right mb-3">
            Ai를 활용하여 효율적으로 고객을 관리하세요!
          </p>

          {/* 신청 목록 */}
          <div className="bg-[#F9F9FF] rounded-lg p-4 mb-4">
            <p className="text-sm text-[#1B12C7] mb-2">11월 23일 토요일</p>
            <h3 className="text-lg font-semibold">{`{username}`}님의 신청</h3>
            <div className="flex gap-2">
              <button className="text-[#4A58E2] border border-[#4A58E2] rounded-full px-4 py-1 text-sm">
                치료이름
              </button>
              <button className="text-[#4A58E2] border border-[#4A58E2] rounded-full px-4 py-1 text-sm">
                치료이름
              </button>
            </div>
          </div>
        </section>

        {/* 신청관리 섹션 */}
        <section className="px-4">
          <h2 className="text-xl font-bold mb-4 flex items-center justify-between">
            신청관리{" "}
            <span className="bg-[#4A58E2] text-white text-xs px-2 py-1 rounded-full">
              3
            </span>
          </h2>

          {/* 신청 카드 */}
          {[...Array(2)].map((_, index) => (
            <div
              key={index}
              className="bg-[#F7F8FF] rounded-lg p-4 mb-4 flex justify-between items-center"
            >
              <div>
                <p className="text-sm text-gray-500 mb-2">11월 23일 토요일</p>
                <h3 className="text-lg font-semibold">
                  {`{username}`}님의 신청
                </h3>
                <p className="text-sm text-gray-500">{`{location}`}</p>
              </div>
              <button className="text-[#4A58E2]">자세히 보기</button>
            </div>
          ))}
        </section>

        {/* Q&A 섹션 */}
        <section className="px-4">
          <h2 className="text-xl font-bold">Q&A</h2>
        </section>

        {/* 하단 네비게이션 바 */}
        <NavBar />
      </div>
    </div>
  );
}
