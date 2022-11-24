import style from "./style.module.css";
import Characters from "../Characters";

function CharCard({ chars }) {
  return (
    <>
      <h1 className={style.titleCard}>Personagens do Rick and Mory</h1>
      <ul className={style.CharCard}>
        <Characters />
      </ul>
    </>
  );
}

export default CharCard;
