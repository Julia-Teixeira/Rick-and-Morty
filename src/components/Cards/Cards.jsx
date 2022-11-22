import "./style.css";
import { Card } from "../Card/Card";

export const Cards = ({ caracteres }) => {
  return (
    <ul className="container">
      {caracteres.results ? (
        caracteres.results.map((caracter) => (
          <Card
            key={caracter.id}
            id={caracter.id}
            name={caracter.name}
            status={caracter.status}
            image={caracter.image}
            species={caracter.species}
          />
        ))
      ) : (
        <h1>Sem personagens na lista</h1>
      )}
    </ul>
  );
};
