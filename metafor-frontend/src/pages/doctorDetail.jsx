import React, { useState } from "react";
import clockIcon from "../assets/icons/clockIcon.svg";
import LocationIcon from "../assets/icons/locationIcon_fill.svg";
import phoneIcon from "../assets/icons/phoneIcon.svg";
import StarIcon from "../assets/icons/starIcon.svg";
import DoctorDefault from "../assets/images/Doctordefault.svg";
import teraphy from "../assets/images/therapy.svg";
import KakaoMap from "../components/KakaoMap";
import NavBar from "../components/NavBar";

export default function DoctorDetail() {
  const [activeTab, setActiveTab] = useState("info"); // 상태 관리: 'info' 또는 'review'
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [peopleCount, setPeopleCount] = useState(12); // 신청 인원
  const [selectedTime, setSelectedTime] = useState("12:00"); // 선택된 시간

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const incrementPeople = () => setPeopleCount(peopleCount + 1); // 신청 인원 증가
  const decrementPeople = () => {
    if (peopleCount > 1) setPeopleCount(peopleCount - 1); // 신청 인원 감소 (최소 1명)
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* 상단 사진 */}
      <img src={DoctorDefault} alt="Doctor" className="object-cover" />

      {/* 의사 정보 */}
      <div className="w-[390px] bg-white p-5 pl-7 pr-7">
        <div className="flex justify-between items-start">
          <div className="flex items-center">
            <h1 className="text-[20px] font-semibold">김동래 원장</h1>
            <p className="text-gray-500 font-semibold text-[12px] ml-3">
              동래한방병원
            </p>
          </div>
          <div className="text-[#3F35FF] text-sm flex items-center gap-1">
            <img src={StarIcon} className="w-[15px]" alt="Star" />
            <span className="text-[12px] font-normal">4.4 (48)</span>
          </div>
        </div>

        {/* 병원 정보 */}
        <div className="mt-4 text-gray-500 space-y-2">
          <div className="flex">
            <img src={LocationIcon} className="w-[20px]" alt="Location" />
            <p className="ml-2">세종 한누리대로 331 SR파크센터 2,3층</p>
          </div>
          <div className="flex">
            <img src={phoneIcon} className="w-[20px]" alt="Phone" />
            <p className="ml-2">070-4564-7894</p>
          </div>
          <div className="flex">
            <img src={clockIcon} className="w-[20px]" alt="Clock" />
            <p className="ml-2">진료시간 : 00:09 - 18:00</p>
          </div>
        </div>

        {/* 예약 버튼 */}
        <button
          className="w-full mt-4 block bg-[#3F35FF] text-white text-[16px] font-bold text-center py-2 rounded-lg"
          onClick={openModal}
        >
          예약하기
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-[360px] p-6 rounded-lg shadow-lg relative">
            <button
              className="absolute top-4 right-4 text-gray-500 text-lg"
              onClick={closeModal}
            >
              ✕
            </button>
            <h2 className="text-[20px] font-semibold mb-6">예약하기</h2>
            <div className="space-y-4">
              {/* 신청 인원 */}
              <div className="flex justify-between items-center">
                <p className="text-[16px] font-semibold">신청 인원</p>
                <div className="flex items-center">
                  <button
                    className="text-[18px] font-bold bg-white border border-blue-500 rounded-full w-8 h-8 flex items-center justify-center"
                    onClick={decrementPeople}
                  >
                    -
                  </button>
                  <span className="mx-4">{peopleCount}명</span>
                  <button
                    className="text-[18px] font-bold bg-white border border-blue-500 rounded-full w-8 h-8 flex items-center justify-center"
                    onClick={incrementPeople}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* 신청 날짜 */}
              <div className="flex justify-between items-center">
                <p className="text-[16px] font-semibold">신청 일자</p>
                <p className="text-[16px]">12월 07일</p>
              </div>

              {/* 진료 시간 */}
              <div>
                <p className="text-[16px] font-semibold mb-2">진료 시간</p>
                <div className="flex gap-3">
                  {["11:00", "12:00", "16:00", "17:00"].map((time) => (
                    <button
                      key={time}
                      className={`text-[16px] px-4 py-2 rounded-lg ${
                        selectedTime === time
                          ? "bg-[#3F35FF] text-white"
                          : "bg-gray-200 text-gray-700"
                      }`}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* 진료 항목 */}
              <div>
                <p className="text-[16px] font-semibold mb-2">신청 진료</p>
                <div className="flex gap-2 flex-wrap">
                  <button className="text-[14px] border border-[#3F35FF] text-[#3F35FF] px-3 py-1 rounded-full">
                    뜸 치료
                  </button>
                  <button className="text-[14px] border border-[#3F35FF] text-[#3F35FF] px-3 py-1 rounded-full">
                    침 치료
                  </button>
                  <button className="text-[14px] border border-[#3F35FF] text-[#3F35FF] px-3 py-1 rounded-full">
                    부항 치료
                  </button>
                </div>
              </div>

              {/* 내 위치 */}
              <div>
                <p className="text-[16px] font-semibold mb-2">내 위치</p>
                <p className="text-[14px] text-gray-500 mb-2">서울시</p>
                <KakaoMap width="300px" height="240px"></KakaoMap>
              </div>
            </div>
            {/* 예약 버튼 */}
            <button
              className="w-full mt-6 bg-[#3F35FF] text-white py-2 rounded-lg"
              onClick={closeModal}
            >
              예약 완료
            </button>
          </div>
        </div>
      )}

      {/* 정보와 리뷰 탭 */}
      <div className="w-[390px] bg-white p-4">
        <div className="flex justify-around border-b">
          <button
            className={`font-bold pb-2 ${
              activeTab === "info"
                ? "text-black border-b-2 border-[#3F35FF]"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab("info")} // '정보' 탭 활성화
          >
            정보
          </button>
          <button
            className={`font-bold pb-2 ${
              activeTab === "review"
                ? "text-black border-b-2 border-[#3F35FF]"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab("review")} // '리뷰' 탭 활성화
          >
            리뷰
          </button>
        </div>

        {/* 탭에 따른 콘텐츠 */}
        <div className="mt-4">
          {activeTab === "info" ? (
            <div>
              {/* 진료과목 */}
              <h2 className="text-[16px] font-semibold">진료과목</h2>
              <div className="mt-2">
                {/* 치료 카드 */}
                <div className="w-full h-max flex items-center border border-[#3F35FF] rounded-[12px] p-2 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center">
                      <h3 className="font-semibold text-black text-[14px] mb-2 ml-2">
                        뜸 치료
                      </h3>
                      <p className="text-[9px] text-[#100A85] ml-2 mb-2">
                        [뜸 치료 우수 한방병원]
                      </p>
                    </div>
                    <div className="flex items-center">
                      <h3 className="font-semibold text-gray-700 text-[12px] ml-2">
                        진료비
                      </h3>
                      <p className="text-[#3F35FF] font-semibold ml-2">
                        6,900 원 - 16,000 원
                      </p>
                    </div>
                  </div>
                  <img
                    src={teraphy}
                    alt="뜸 치료"
                    className="w-30 h-16 rounded-lg object-cover"
                  />
                </div>
                <div className="w-full h-max flex items-center border border-[#3F35FF] rounded-[12px] p-2 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center">
                      <h3 className="font-semibold text-black text-[14px] mb-2 ml-2">
                        뜸 치료
                      </h3>
                      <p className="text-[9px] text-[#100A85] ml-2 mb-2">
                        [뜸 치료 우수 한방병원]
                      </p>
                    </div>
                    <div className="flex items-center">
                      <h3 className="font-semibold text-gray-700 text-[12px] ml-2">
                        진료비
                      </h3>
                      <p className="text-[#3F35FF] font-semibold ml-2">
                        6,900 원 - 16,000 원
                      </p>
                    </div>
                  </div>
                  <img
                    src={teraphy}
                    alt="뜸 치료"
                    className="w-30 h-16 rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="p-2">
              {/* 리뷰 제목 */}
              <h2 className="text-[16px] font-semibold">방문 리뷰</h2>

              {/* 리뷰 평점 및 그래프 */}
              <div className="mt-4 border border-gray-200 rounded-lg p-4 bg-white flex justify-between">
                <div>
                  <div className="flex items-center ml-7">
                    {/* 평균 평점 */}
                    <div className="flex items-center">
                      <p className="text-[34px] font-semibold mr-2 mt-2">4.4</p>
                      <img
                        src={StarIcon} // 별 아이콘
                        alt="Star Icon"
                        className="w-[20px] h-[20px] mt-4"
                      />
                    </div>
                  </div>
                  <p className="text-gray-500 text-[12px] ml-7">48개의 리뷰</p>
                </div>
                <div className="w-[150px]">
                  {/* 평점 그래프 */}
                  <div className="space-y-0">
                    {[5, 4, 3, 2, 1].map((rating, index) => (
                      <div key={index} className="flex items-center">
                        {/* 평점 텍스트 */}
                        <p className="text-sm text-black font-semibold w-[20px]">
                          {rating}
                        </p>
                        <div className="flex-1 bg-gray-200 h-[8px] rounded-md relative">
                          {/* 그래프 바 */}
                          <div
                            className={`bg-[#3F35FF] h-[8px] rounded-md`}
                            style={{
                              width: `${
                                rating === 5
                                  ? "80%"
                                  : rating === 4
                                  ? "60%"
                                  : "0%"
                              }`,
                            }}
                          ></div>
                        </div>
                        {/* 리뷰 수 */}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 개별 리뷰 카드 */}
              <div className="mt-4">
                <div className="w-full border border-gray-300 rounded-lg p-4 mb-4">
                  <p className="text-[14px] font-semibold">
                    {`"너무 친절하게 진료해주셨어요!"`}
                  </p>
                  <p className="text-[12px] text-gray-500 mt-2">- 김OO</p>
                </div>
                <div className="w-full border border-gray-300 rounded-lg p-4 mb-4">
                  <p className="text-[14px] font-semibold">
                    {`"병원 분위기도 좋고 만족했습니다."`}
                  </p>
                  <p className="text-[12px] text-gray-500 mt-2">- 이OO</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <NavBar num={3} />
    </div>
  );
}
