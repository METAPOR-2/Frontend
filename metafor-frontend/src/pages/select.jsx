import Button from "../components/button";
import RadioBtn from "../components/radioBtn";
import { useState } from "react";
import Circle from "../components/circle";

export default function Select() {
  const [selected, setSelected] = useState(null);

  const handleRadioChange = (value) => {
    setSelected(value);
  };

  return (
    <div className="relative flex flex-col w-[390px] h-[844px] border border-gray-300 shadow-lg rounded-lg overflow-hidden">
      <main className="flex-grow w-full p-4  flex items-center justify-center flex-col">
        <Circle page={1} />
        <div className="text-[24px] font-normal font-semibold leading-normal mt-[43px]">
          의학 분야를 선택해 주세요.
        </div>
        <div className="flex items-center justify-center flex-col gap-[40px] my-[80px]">
          <RadioBtn
            text="한의사"
            isChecked={selected === "한의사"}
            onChange={() => handleRadioChange("한의사")}
          />
          <RadioBtn
            text="물리치료사"
            isChecked={selected === "물리치료사"}
            onChange={() => handleRadioChange("물리치료사")}
          />
          <RadioBtn
            text="도수치료사"
            isChecked={selected === "도수치료사"}
            onChange={() => handleRadioChange("도수치료사")}
          />
          <RadioBtn
            text="의사"
            isChecked={selected === "의사"}
            onChange={() => handleRadioChange("의사")}
          />
          <RadioBtn
            text="직접입력하기"
            isChecked={selected === "직접입력하기"}
            onChange={() => handleRadioChange("직접입력하기")}
            className="underline"
          />
        </div>

        <Button children={"다음"} />
      </main>
    </div>
  );
}
