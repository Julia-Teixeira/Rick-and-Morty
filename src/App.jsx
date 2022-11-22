import { useEffect, useState } from "react";
import "./App.css";
import { Cards } from "./components/Cards/Cards";
import { Header } from "./components/Header/Header";

function App() {
  const [caracter, setCaracter] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => response.json())
      .then((response) => setCaracter(response))
      .catch((err) => console.log(err));
  }, [page]);

  const nextPage = () => {
    if (caracter.info.next !== null) {
      setPage(page + 1);
    }
  };

  const previousPage = () => {
    if (caracter.info.prev !== null) {
      setPage(page - 1);
    }
  };

  return (
    <div className="App">
      <Header next={nextPage} previous={previousPage} />
      <Cards caracteres={caracter} />
    </div>
  );
}

export default App;
