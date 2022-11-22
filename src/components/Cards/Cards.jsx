import "./style.css";
import { Card } from "../Card/Card";

export const Cards = ({ caracter }) => {
  return (
    <ul className="container">
      {caracter.map((caracter) => (
        <Card
          key={caracter.id}
          id={caracter.id}
          name={caracter.name}
          status={caracter.status}
          image={caracter.image}
          species={caracter.species}
        />
      ))}
    </ul>
  );
};
