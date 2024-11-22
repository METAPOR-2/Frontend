import React from "react";

const Button = ({ children, onClick=()=> { } }) => {
  return (
    <button
      className="w-[334px] h-[56px] rounded-2xl bg-[#3F35FF] text-white text-center font-extrabold text-[17px]"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
