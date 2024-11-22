function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="w-full py-4 bg-blue-500 text-white text-center">
        <h1 className="text-xl font-bold">MOISO</h1>
      </header>
      <main className="flex-grow w-full max-w-md px-4">
        <section className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">모바일 앱 화면입니다.</h2>
          <p className="text-gray-700">되는 것이겠죠?</p>
        </section>
      </main>
      <footer className="w-full py-4 bg-gray-800 text-white text-center">
        <p className="text-sm">© 2024 MEDILUX x TAVE Hackaton Team 2</p>
      </footer>
    </div>
  );
}

export default App;
