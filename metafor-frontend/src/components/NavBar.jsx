import React from "react";
import { Link } from "react-router-dom"; // React Router 사용
import ChatIcon from "../assets/icons/ChatIcon.svg";
import CalendarIcon from "../assets/icons/calendarIcon.svg";
import HomeIcon from "../assets/icons/homeIcon.svg";
import myPageIcon from "../assets/icons/myPageIcon.svg";

export default function NavBar({ num = 1 }) {
  return (
    <nav className="fixed bottom-0 w-full max-w-[390px] bg-white border-t border-gray-300 shadow-md flex justify-between items-center p-10 h-[90px]">
      {/* Home 아이콘 */}

      <Link
        to="/doctor-home"
        className="flex flex-col items-center text-gray-500"
      >
        <div
          className="w-8 h-8"
          style={{
            WebkitMaskImage: `url(${HomeIcon})`,
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "contain",
            backgroundColor: `${num == 1 ? "#3F35FF" : "#DEE4FF"}`,
          }}
        ></div>
      </Link>

      {/* chat 아이콘 */}
      <Link to="/schedule" className="flex flex-col items-center text-gray-500">
        <div
          className="w-8 h-8"
          style={{
            WebkitMaskImage: `url(${ChatIcon})`,
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "contain",
            backgroundColor: `${num == 2 ? "#3F35FF" : "#DEE4FF"}`, // 원하는 색상
          }}
        ></div>
      </Link>

      {/* calendar 아이콘 */}
      <Link
        to="/customerhome"
        className="flex flex-col items-center text-gray-500"
      >
        <div
          className="w-8 h-8"
          style={{
            WebkitMaskImage: `url(${CalendarIcon})`,
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "contain",
            backgroundColor: `${num == 3 ? "#3F35FF" : "#DEE4FF"}`, // 원하는 색상
          }}
        ></div>
      </Link>

      {/* Profile 아이콘 */}
      <Link to="/calendar" className="flex flex-col items-center text-gray-500">
        <div
          className="w-8 h-8"
          style={{
            WebkitMaskImage: `url(${myPageIcon})`,
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "contain",
            backgroundColor: `${num == 4 ? "#3F35FF" : "#DEE4FF"}`, // 원하는 색상
          }}
        ></div>
      </Link>
    </nav>
  );
}
