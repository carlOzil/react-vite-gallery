import { BuscadorFotos } from "./components/BuscadorFotos";
// import './helpers/getPics'
// import './helpers/consultaFetch'

function App() {


  return (
    <>
      <header className="p-5 bg-success text-light text-center">
        <p className="display-3">Práctica React Pexels</p>
      </header>

      <main className="bg-dark text-light container my-5">
      <BuscadorFotos/>
    </main>

      <footer className="p-2 bg-success text-light text-center">
        <p className="display-6">@SuárzoDev´23</p>
      </footer>
    </>
  );
}

export default App
