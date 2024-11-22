function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="w-full py-4 bg-blue-500 text-white text-center">
        <h1 className="text-xl font-bold">React Mobile App</h1>
      </header>
      <main className="flex-grow w-full max-w-md px-4">
        <section className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Hello, Mobile!</h2>
          <p className="text-gray-700">
            This is a simple mobile-friendly view.
          </p>
        </section>
      </main>
      <footer className="w-full py-4 bg-gray-800 text-white text-center">
        <p className="text-sm">© 2024 My App</p>
      </footer>
    </div>
  );
}

export default App;
