import { useNavigate } from "react-router-dom";
import MapImg from "../assets/images/Map.png";

import Button from "../components/button";
import Circle from "../components/circle";
import KakaoMap from "../components/KakaoMap";


export default function Map() {
  //<img src={MapImg} className="w-[334px] h-[334px]" />
  const navigator = useNavigate();
  const hadleLogin = () => {
    navigator("/doctor-home");
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative flex flex-col w-[390px] h-[844px] border border-gray-300 shadow-lg rounded-lg overflow-hidden">
        <main className="flex-grow w-full p-4  flex items-center justify-center flex-col gap-16">
          <Circle page={4} />
          <div className="text-[24px] font-normal font-semibold leading-normal">
            진료 가능한 지역을 알려주세요.
          </div>
          <div className="flex flex-row gap-2">
            <div className="inline-flex h-[26px] px-[15px] py-[5px] justify-center items-center gap-[10px] flex-shrink-0 rounded-[13px] border border-[#5260FF] text-[#000] text-[11px] font-[500] leading-[14px] text-center ">
              서울특별시
            </div>
            <div className="inline-flex h-[26px] px-[15px] py-[5px] justify-center items-center gap-[10px] flex-shrink-0 rounded-[13px] border border-[#5260FF] text-[#000] text-[11px] font-[500] leading-[14px] text-center ">
              서울특별시 / 마포구
            </div>
            <div className="font-bold inline-flex h-[26px] px-[15px] py-[5px] justify-center items-center gap-[10px] flex-shrink-0 rounded-[13px] border border-[#F1F1F1] bg-[#F1F1F1] text-[#6C6C6C] text-[11px] font-[500] leading-[14px] text-center">
              +
            </div>
          </div>

          <KakaoMap />
          <Button children={"시작하기"} onClick={hadleLogin} />
        </main>
      </div>
    </div>
  );
}
