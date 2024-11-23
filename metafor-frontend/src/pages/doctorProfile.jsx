import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/button";
import Input from "../components/input";
import { registerDoctor } from "../services/api"; // API 함수

export default function DoctorProfile() {
  const navigate = useNavigate();
  const location = useLocation();
  const { doctorType, regNumber } = location.state; // 이전 화면에서 전달받은 데이터

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [locationData, setLocationData] = useState({
    address: "",
    si: "",
    gu: "",
    doro: "",
    range: "",
  });

  const handleStart = async () => {
    const token = localStorage.getItem("accessToken"); // 회원가입 시 저장한 토큰 값
    console.log("토큰 값:", token);
    if (!token) {
      alert("로그인 정보가 없습니다. 다시 로그인해주세요.");
      navigate("/login");
      return;
    }

    const doctorData = {
      name,
      phone,
      doctorType,
      hospitalName,
      regNumber,
      location: locationData,
    };

    try {
      const response = await registerDoctor(doctorData, token); // API 요청
      alert("등록이 완료되었습니다!");
      navigate("/map");
    } catch (error) {
      console.error("등록 실패:", error);
      alert("등록에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative flex flex-col w-[390px] h-[844px] border border-gray-300 shadow-lg rounded-lg overflow-hidden">
        <main className="flex-grow w-full p-4 flex items-center justify-center flex-col">
          <h1 className="text-2xl font-bold mt-20 mb-10">
            의료정보를 확인할게요.
          </h1>
          <Input
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="mb-5"></div>
          <Input
            placeholder="전화번호"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <div className="mb-5"></div>
          <Input
            placeholder="병원 이름"
            value={hospitalName}
            onChange={(e) => setHospitalName(e.target.value)}
          />
          <div className="mb-5"></div>
          <Input
            placeholder="주소"
            value={locationData.address}
            onChange={(e) =>
              setLocationData({ ...locationData, address: e.target.value })
            }
          />
          <div className="mb-5"></div>
          <Button children={"시작하기"} onClick={handleStart} />
        </main>
      </div>
    </div>
  );
}
