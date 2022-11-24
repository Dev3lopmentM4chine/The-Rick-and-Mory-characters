import style from "./style.module.css";
import img2 from "../../img/rick.jpg"

function CharCard({ name, img }) {
  return (
    <li className={style.Characters}>
      {/* <h3>{name}</h3> */}
      <h1>Nome do personagem</h1>
      <figure>
        {/* <img src={img} alt="Foto do personagem" /> */}
        <img src={img2} alt="Foto do rick" />
      </figure>
    </li>
  );
}

export default CharCard;
