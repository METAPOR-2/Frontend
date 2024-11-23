import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/Logo.svg";
import Button from "../components/button";
import Input from "../components/input";
import { signInUser } from "../services/api"; // API 호출 함수

export default function Login() {
  const [id, setId] = useState(""); // 아이디 입력값
  const [password, setPassword] = useState(""); // 비밀번호 입력값
  const [loading, setLoading] = useState(false); // 로딩 상태
  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log("아이디:", id);
    console.log("비밀번호:", password);

    if (!id || !password) {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }

    const loginData = {
      id,
      password,
    };

    try {
      setLoading(true);
      const response = await signInUser(loginData); // API 호출
      console.log("로그인 성공:", response);

      const accessToken = response?.data?.access; // 토큰 추출
      console.log("Access token:", accessToken);

      if (!accessToken) {
        throw new Error("로그인 성공 후 토큰을 받지 못했습니다.");
      }

      // 토큰 저장
      localStorage.setItem("accessToken", accessToken);
      alert("로그인에 성공했습니다!");

      // 홈 페이지로 이동
      navigate("/doctor-home");
    } catch (error) {
      console.error("로그인 실패:", error);
      alert(error.message || "로그인에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative flex flex-col w-[390px] h-[844px] border border-gray-300 shadow-lg rounded-lg overflow-hidden">
        <main className="flex-grow w-full p-4 flex items-center justify-center flex-col gap-20">
          <img src={Logo} alt="Logo" className="w-45 h-8 mb-4" />
          <div className="flex items-center justify-center flex-col gap-7">
            <Input
              placeholder="아이디를 입력하세요"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <Input
              placeholder="비밀번호를 입력하세요"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="w-full flex justify-end pr-4 text-gray-700">
              계정이 없으신가요?{" "}
              <span
                className="text-blue-500 ml-2 cursor-pointer"
                onClick={() => navigate("/signup")}
              >
                회원가입
              </span>
            </div>
          </div>
          <Button
            children={loading ? "로그인 중..." : "로그인하기"}
            onClick={handleLogin}
            disabled={loading}
          />
        </main>
      </div>
    </div>
  );
}
