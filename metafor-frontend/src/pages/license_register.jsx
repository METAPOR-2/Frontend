import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/button";
import Input from "../components/input";

export default function LicenseRegister() {
  const navigate = useNavigate();
  const location = useLocation();
  const { doctorType } = location.state; // 이전 화면에서 전달받은 데이터

  const [license, setLicense] = useState(""); // 등록 번호

  const handleNext = () => {
    if (!license) {
      alert("의료면허증 등록 번호를 입력해주세요.");
      return;
    }
    navigate("/doctorprofile", {
      state: { doctorType, regNumber: license },
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative flex flex-col w-[390px] h-[844px] border border-gray-300 shadow-lg rounded-lg overflow-hidden">
        <main className="flex-grow w-full p-4 flex items-center justify-center flex-col">
          <h1 className="text-2xl font-bold mt-20 mb-20">
            의료면허증을 등록해주세요.
          </h1>
          <Input
            placeholder="면허증 번호를 입력하세요"
            value={license}
            onChange={(e) => setLicense(e.target.value)}
          />
          <div className="mb-20"></div>
          <Button children={"다음"} onClick={handleNext} />
        </main>
      </div>
    </div>
  );
}
