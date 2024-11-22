import React from "react";

export default function Input({ placeholder = "", type = "text", Icon }) {
  return (
    <div className="relative w-[334px] h-[56px]">
      {/* 아이콘 위치 */}
      {Icon && (
        <span className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <img src={Icon} alt="icon" className="w-5 h-5 text-gray-400" />
        </span>
      )}
      {/* 입력 필드 */}
      <input
        className="w-full h-full pl-12 pr-4 bg-gray-50 border-none rounded-[12px] focus:outline-none placeholder-gray-500 text-[16px]"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}