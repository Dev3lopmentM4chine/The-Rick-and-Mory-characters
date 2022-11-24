import style from "./style.module.css";
import Characters from "../Characters";

function CharCard({ chars }) {
  return (
    <>
      <ul className={style.CharCard}>
        {chars.map(char => <Characters key={char.id} name={char.name} img={char.image}/>)}
      </ul>
    </>
  );
}

export default CharCard;
