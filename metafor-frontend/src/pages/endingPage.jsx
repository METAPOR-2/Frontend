import LogoWhite from "../assets/images/LogoWhite.svg";
import QRcode from "../assets/images/QRcode.png";

export default function EndingPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative flex flex-col w-[390px] h-[844px] bg-[#3F35FF] border border-gray-300 shadow-lg rounded-lg overflow-hidden">
        <main className="flex-grow w-full p-4 flex items-center justify-center flex-col">
          <p className="text-[20px] text-[#C0C5FF] font-bold mb-5 mt-20">
            보편의 의료,
          </p>

          <img src={LogoWhite} className="w-50 mb-20 cursor-pointer" alt="QR" />
          <img src={QRcode} className="w-50 mb-40" alt="QR" />
        </main>
      </div>
    </div>
  );
}
