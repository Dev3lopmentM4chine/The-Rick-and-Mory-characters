import style from "./style.module.css";
import Characters from "../Characters"

function CharCard({ chars }) {
  return (
    <ul className={style.CharCard}>
      <Characters/>
    </ul>
  );
}

export default CharCard;
