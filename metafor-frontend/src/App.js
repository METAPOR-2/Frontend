import { Logo } from "../src/assets/images/Logo.svg";
function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* 모바일 화면을 감싸는 컨테이너 */}
      <div className="relative flex flex-col w-[390px] h-[844px] bg-gray-50 border border-gray-300 shadow-lg rounded-lg overflow-hidden">
        <header className="w-full py-4 bg-black text-white text-center">
          <h1 className="text-xl font-bold">MOISO</h1>
        </header>
        <main className="flex-grow w-full px-4">
          <section className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">
              모바일 앱 화면입니다.
            </h2>
            <p className="text-gray-700">되는 것이겠죠?</p>
          </section>
        </main>
        <footer className="w-full py-4 bg-gray-800 text-white text-center">
          <p className="text-sm">© 2024 MEDILUX x TAVE Hackaton Team 2</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
