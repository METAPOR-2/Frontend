import Button from "../components/button";
import { useState } from "react";
import Logo from "../assets/images/Logo.svg";
import { useNavigate } from "react-router-dom";
import Profile from "../assets/images/Profile.svg";
import Shield from "../assets/images/Shield.svg";
import SelectShield from "../assets/images/SelectShield.svg";
import SelectProfile from "../assets/images/SelectProfile.svg";

export default function StartPage() {
  const [selected, setSelected] = useState("profile"); // "profile" 또는 "shield"
  const navigator = useNavigate();

  const handleSelect = (type) => {
    setSelected(type);
  };

  const handleLogin = () => {
    navigator("/Login");
  };

  return (
    <div className="relative flex flex-col w-[390px] h-[844px] border border-gray-300 shadow-lg rounded-lg overflow-hidden">
      <main className="flex-grow w-full p-4 flex items-center justify-center flex-col gap-20">
        <img src={Logo} alt="Logo" className="w-45 h-8 mb-4" />
        <div className="flex items-center justify-center flex-row gap-7">
          {/* Profile Section */}
          <div
            className={`flex items-center justify-center flex-col w-[158px] h-[186px] cursor-pointer ${
              selected === "profile"
                ? "border-2 border-[#8486FF] rounded-lg"
                : ""
            }`}
            onClick={() => handleSelect("profile")}
          >
            <img
              src={selected === "profile" ? SelectProfile : Profile}
              alt="Profile"
              className="w-45 h-8 mb-4"
            />
            <div
              className={`${
                selected === "profile"
                  ? "text-black font-semibold "
                  : "text-gray-500"
              }`}
            >
              선생님이 필요해요.
            </div>
          </div>

          {/* Shield Section */}
          <div
            className={`flex items-center justify-center flex-col w-[158px] h-[186px] cursor-pointer ${
              selected === "shield"
                ? "border-2 border-[#8486FF] rounded-lg"
                : ""
            }`}
            onClick={() => handleSelect("shield")}
          >
            <img
              src={selected === "shield" ? SelectShield : Shield}
              alt="Shield"
              className="w-45 h-8 mb-4"
            />
            <div
              className={`${
                selected === "shield"
                  ? "text-black font-semibold "
                  : "text-gray-500"
              }`}
            >
              의료인이에요.
            </div>
          </div>
        </div>
        <Button
          children={`${selected === "shield" ? "의료인" : "진료인"}으로 시작하기
              `}
          onClick={handleLogin}
        />
      </main>
    </div>
  );
}
