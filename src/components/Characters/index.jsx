import style from "./style.module.css";

function CharCard({ name, img }) {
  return (
    <li className={style.Characters}>
      <figure>
        <img src={img} alt="Foto do personagem" />
      </figure>
      <h2>{name}</h2>
    </li>
  );
}

export default CharCard;
