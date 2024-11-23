import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoWhite from "../assets/images/LogoWhite.svg";

export default function SplashScreen() {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false); // 전환 상태 관리

  const handleLogoClick = () => {
    setIsTransitioning(true); // 애니메이션 시작
    setTimeout(() => {
      navigate("/startPage"); // 애니메이션 종료 후 페이지 이동
    }, 1000); // 애니메이션 지속 시간 (1초) 후 네비게이션
  };

  return (
    <div
      className={`flex items-center justify-center min-h-screen ${
        isTransitioning ? "opacity-10 transition-opacity duration-1000" : ""
      }`}
    >
      <div className="relative flex flex-col w-[390px] h-[844px] bg-[#3F35FF] border border-gray-300 shadow-lg rounded-lg overflow-hidden">
        <main className="flex-grow w-full p-4 flex items-center justify-center flex-col">
          <p className="text-[20px] text-[#C0C5FF] font-bold mb-5">
            보편의 의료,
          </p>
          <div>
            <img
              src={LogoWhite}
              className="w-50 mb-40 cursor-pointer"
              onClick={handleLogoClick}
              alt="Logo"
            />
          </div>
        </main>
      </div>
    </div>
  );
}
