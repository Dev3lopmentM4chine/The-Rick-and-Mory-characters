import style from "./style.module.css";

function CharCard({ name, img }) {
  return (
    <li className={style.Characters}>
      <h3>{name}</h3>
      <figure>
        <img src={img} alt="Foto do personagem" />
      </figure>
    </li>
  );
}

export default CharCard;
