import { useState } from "react";

export default function Circle({ page = 1 }) {
  const [selected, setSelected] = useState(page);

  // 선택된 인덱스를 설정하는 함수
  const handleSelect = (index) => {
    setSelected(index);
  };

  return (
    <div className="flex flex-row gap-4">
      {[1, 2, 3, 4].map((index) => (
        <div
          key={index}
          className={`w-[8px] h-[8px] rounded-full ${
            selected === index ? "bg-[#3F35FF]" : "bg-[#D9D9D9]"
          }`}
          onClick={() => handleSelect(index)}
        ></div>
      ))}
    </div>
  );
}
