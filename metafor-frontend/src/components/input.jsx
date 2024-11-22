import { React } from "react";

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
        className="w-[334px] h-[56px] p-[20px] bg-gray-50 border-none rounded-[12px] focus:outline-none p-4"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
