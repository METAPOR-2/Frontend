import React, { useEffect } from "react";
const { kakao } = window;

const KakaoMap = () => {
  useEffect(() => {
    // Kakao Maps API 로드
    const script = document.createElement("script");
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=579ad12475a2fc3bdb278c2c613f1aea";
    script.async = true;
    script.onload = () => {
      if (window.kakao && window.kakao.maps) {
        // 지도 초기화
        const container = document.getElementById("map");
        const options = {
          center: new kakao.maps.LatLng(37.5665, 126.978), // 기본 좌표 (서울)
          level: 3, // 지도 확대 레벨
        };
        const map = new kakao.maps.Map(container, options);

        // 현재 위치로 마커 표시
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            const currentLocation = new kakao.maps.LatLng(lat, lng);
            const marker = new kakao.maps.Marker({
              position: currentLocation,
            });
            marker.setMap(map); // 마커 표시
            map.setCenter(currentLocation); // 지도 중심 변경
          },
          (error) => {
            console.error("Geolocation error:", error.message);
          }
        );
      }
    };

    // script 태그 추가
    document.head.appendChild(script);

    return () => {
      // script 태그 제거
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div
      id="map"
      className="w-[334px] h-[334px] border rounded-lg shadow-lg"
    ></div>
  );
};

export default KakaoMap;
