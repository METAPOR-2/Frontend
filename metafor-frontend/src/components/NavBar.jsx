import React from "react";
import { Link } from "react-router-dom"; // React Router 사용
import CalendarIcon from "../assets/icons/calendarIcon.svg";
import ChatIcon from "../assets/icons/ChatIcon.svg";
import HomeIcon from "../assets/icons/homeIcon.svg";
import myPageIcon from "../assets/icons/myPageIcon.svg";

export default function NavBar() {
  return (
    <nav className="fixed bottom-0 w-full max-w-[390px] bg-white border-t border-gray-300 shadow-md flex justify-between items-center p-10 h-[90px]">
      {/* Home 아이콘 */}

      <Link to="/home" className="flex flex-col items-center text-gray-500">
        <img src={HomeIcon} alt="Home" className="w-8 h-8" />
      </Link>

      {/* chat 아이콘 */}
      <Link to="/schedule" className="flex flex-col items-center text-gray-500">
        <img src={ChatIcon} alt="Chat" className="w-8 h-8" />
      </Link>

      {/* calendar 아이콘 */}
      <Link to="/profile" className="flex flex-col items-center text-gray-500">
        <img src={CalendarIcon} alt="Calendar" className="w-8 h-8" />
      </Link>

      {/* Profile 아이콘 */}
      <Link to="/profile" className="flex flex-col items-center text-gray-500">
        <img src={myPageIcon} alt="Profile" className="w-8 h-8" />
      </Link>
    </nav>
  );
}
