import "./style.css";
export const Card = ({ id, name, status, image, species }) => {
  return (
    <li id={id} className={status === "Alive" ? `alive` : `dead`}>
      <p className="text">{`${name.slice(0, 15)}...`}</p>
      <img src={image} alt={`Imagem do personágem ${name}`} />
      <p className="species">Espécie: {species}</p>
    </li>
  );
};
