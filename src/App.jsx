import { BuscadorFotos } from "./components/BuscadorFotos";
// import './helpers/getPics'
// import './helpers/consultaFetch'

function App() {


  return (
    <>
      <header className="p-5 bg-warning text-dark text-center">
        <p className="display-3">Práctica React Pexels</p>
      </header>

      <main className="text-dark container my-5">
      <BuscadorFotos/>
    </main>

      <footer className="p-2 bg-warning text-dark text-center">
        <p className="display-6">@SuárzoDev´23</p>
      </footer>
    </>
  );
}

export default App
