import React, { useState, useEffect } from "react";
import axios from "axios"; // HTTP 요청
import AiIcon from "../assets/icons/AiIcon.svg";
import Location from "../assets/icons/locationIcon.svg";
import Logo from "../assets/images/Logo.svg";
import KakaoMap from "../components/KakaoMap";
import NavBar from "../components/NavBar";

export default function DoctorHome() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null); // 모달에 표시할 데이터
  const [events, setEvents] = useState({ acceptedEvents: [], pendingEvents: [] });

  // 백엔드에서 데이터 가져오기
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("https://moiso.api.devch.site/event", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`, // 저장된 토큰 사용
          },
        });
        console.log("이벤트 데이터:", response.data);
        setEvents(response.data.data);
      } catch (error) {
        console.error("이벤트 불러오기 실패:", error);
        alert("데이터를 불러오는 데 실패했습니다.");
      }
    };

    fetchEvents();
  }, []);

  // 모달 열기
  const handleOpenModal = (eventData) => {
    setModalData(eventData);
    setIsModalOpen(true);
  };

  // 모달 닫기
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
      <div className="relative flex flex-col w-[390px] h-[844px] bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden">
        {/* 상단 로고 */}
        <header className="w-full mt-[70px] mb-[48px] flex flex-col items-center">
          <img src={Logo} alt="Logo" className="w-[103px]" />
        </header>

        {/* 일정관리 섹션 */}
        <section className="px-6 mb-10">
          <h2 className="text-[22px] font-semibold mb-[18px]">일정관리</h2>

          {/* AI 루틴 */}
          <div className="flex items-center justify-between bg-white border border-[#3F35FF] rounded-[12px] p-3 mb-4">
            <div className="flex items-center gap-3">
              <img src={AiIcon} className="w-[20px]" />
              <p className="text-[#3F35FF] font-semibold text-[18px]">Ai 루틴</p>
            </div>
          </div>
          <p className="text-[12px] font-normal text-gray-400 text-right mb-4">
            Ai를 활용하여 효율적으로 고객을 관리하세요!
          </p>

          {/* 신청 목록 */}
          {events.pendingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-[#F9F9FF] rounded-lg p-4 mb-2 w-[334px] h-[135px]"
            >
              <div className="flex justify-between">
                <p className="text-sm text-[#1B12C7] mb-2">
                  {event.eventDateTime}
                </p>
                <img src={Location} className="w-[15px] h-[15px]" />
              </div>
              <h3 className="text-[20px] font-semibold mb-2">
                {event.userName}님의 신청
              </h3>
              <div className="flex">
                {event.clinicType.map((type) => (
                  <button
                    key={type.clinicTypeId}
                    className="text-black bg-white border border-[#4A58E2] rounded-full w-[63px] h-[26px] px-2 text-[11px] mr-[16px]"
                  >
                    {type.title}
                  </button>
                ))}
              </div>
              <p
                className="text-[12px] text-gray-400 font-normal cursor-pointer text-right"
                onClick={() => handleOpenModal(event)} // 클릭 시 모달 열기
              >
                자세히 보기
              </p>
            </div>
          ))}
        </section>

        {/* 모달 */}
        {isModalOpen && modalData && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white w-[390px] rounded-lg shadow-lg p-6">
              <h2 className="text-[20px] font-semibold mb-4">
                {modalData.userName}님의 신청
              </h2>
              <div className="flex justify-between items-center mb-[20px]">
                <p className="text-gray-900 font-semibold text-[16px]">
                  신청 인원
                </p>
                <p className="text-[#3F35FF] font-bold text-[18px]">
                  {modalData.patientNumber}명
                </p>
              </div>
              <div className="flex justify-between items-center mb-[20px]">
                <p className="text-gray-900 font-semibold text-[16px]">
                  신청 일자
                </p>
                <p className="text-[#3F35FF] font-bold text-[18px]">
                  {modalData.eventDateTime}
                </p>
              </div>
              <p className="text-gray-900 font-semibold text-[16px] mb-3">
                신청 항목
              </p>
              <div className="flex gap-2 mb-2">
                {modalData.clinicType.map((type) => (
                  <button
                    key={type.clinicTypeId}
                    className="text-black bg-white border border-[#4A58E2] rounded-[8px] w-[63px] h-[26px] px-2 text-[11px]"
                  >
                    {type.title}
                  </button>
                ))}
              </div>
              <div className="flex items-center mb-[10px]">
                <p className="text-gray-900 font-semibold text-[16px]">위치</p>
                <img src={Location} className="w-[15px] h-[15px] ml-2"></img>
              </div>
              <KakaoMap address={modalData.address} />
              <div className="flex justify-between gap-2">
                <button
                  className="w-full bg-[#4A58E2] text-white py-2 rounded-lg"
                  onClick={handleCloseModal}
                >
                  수락
                </button>
                <button
                  className="w-full bg-white border border-blue-600 text-blue-600 py-2 rounded-lg"
                  onClick={handleCloseModal}
                >
                  거절
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 하단 네비게이션 바 */}
        <NavBar />
      </div>
    </div>
  );
}
