function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-2xl w-full max-w-md border border-white/20">
        <h1 className="text-4xl font-bold text-white text-center mb-6 tracking-tight">
          Template React + TailwindCSS
        </h1>

        <div className="space-y-6">
          <h2 className="text-2xl text-white/90 font-medium text-center">
            Template por Marcos Anjos
          </h2>

          <div className="flex flex-col items-center gap-4">
            <a
              href="https://marcosanjos.site"
              className="text-white hover:text-blue-200 transition-colors underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Outros projetos
            </a>

            <button
              className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg 
              transition-all duration-300 hover:scale-105 border border-white/30 backdrop-blur-sm"
            >
              ☕ Pix para um Café
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
