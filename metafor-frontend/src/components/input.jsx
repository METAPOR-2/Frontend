import { useState, React, useEffect } from "react";

/*
 textSize = 텍스트 크기,
  placeholder = 입력 전 힌트 값,
  
   */
export default function Input({
  placeholder = "",
  type = "text",
  onChange = () => {},
}) {
  return (
    <div>
      <input
        className="w-[336px] h-[36px] bg-gray-50 border-none rounded-[14px] focus:outline-none"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
