import { useEffect, useState } from "react";
import "./App.css";
import { Card } from "./components/Card/Card";
import { Cards } from "./components/Cards/Cards";
import { Header } from "./components/Header/Header";

function App() {
  const [caracter, setCaracter] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((response) => setCaracter(response.results))
      .catch((err) => console.log(err));
  }, []);
  console.log(caracter);

  return (
    <div className="App">
      <Header />
      <Cards caracter={caracter} />
    </div>
  );
}

export default App;
