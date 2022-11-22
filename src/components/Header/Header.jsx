import "./style.css";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export const Header = ({ next, previous }) => {
  return (
    <header>
      <div className="container">
        <h1 className="title1">Meus personagens</h1>
        <nav>
          <button onClick={previous}>
            <FiArrowLeft size={"2rem"} color={"green"} />
          </button>
          <button onClick={next}>
            <FiArrowRight size={"2rem"} color={"green"} />
          </button>
        </nav>
      </div>
    </header>
  );
};
