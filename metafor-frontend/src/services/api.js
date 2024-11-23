import axios from "axios";

const api = axios.create({
  baseURL: "https://moiso.api.devch.site", // 백엔드 URL
  headers: {
    "Content-Type": "application/json",
  },
});

// 회원가입 API 호출
export const signUpUser = async (userData) => {
  try {
    const response = await api.post("/user/register", userData);
    console.log("응답 데이터:", response.data); // 응답 데이터 확인

    const accessToken = response.data?.data?.access; // 토큰 추출
    if (!accessToken) {
      throw new Error(
        "서버로부터 유효한 토큰을 받지 못했습니다. 응답 구조를 확인하세요."
      );
    }
    return response.data; // 호출한 컴포넌트가 토큰 처리
  } catch (error) {
    console.error("회원가입 API 호출 오류:", error);
    throw error.response ? error.response.data : new Error("네트워크 오류");
  }
};

// 의사 정보 등록
export const registerDoctor = async (doctorData, token) => {
  if (!token) {
    throw new Error("토큰이 제공되지 않았습니다. 로그인 상태를 확인하세요.");
  }

  try {
    const response = await api.post("/doc/user", doctorData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("의사 정보 등록 API 호출 오류:", error);
    throw error.response ? error.response.data : new Error("네트워크 오류");
  }
};
