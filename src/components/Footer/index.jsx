import style from "./style.module.css";

function Footer({ prop }) {
  return (
    <footer className={style.Footer}>
      <div>
        <span>CHARACTERS:{prop}</span>
        <span>LOCARIONS:{prop}</span>
        <span>EPISODES:{prop}</span>
        <span>SERVER STATUS:{prop}</span>
      </div>

      <div>
        <span>
          <a href="#" target="_blank">Linkedin</a>
        </span>

        <span>
          <a href="#" target="_blank">GitHub</a>
        </span>
        
        <span>
          <a href="#" target="_blank">FaceBook</a>
        </span>
      </div>
      
      <span>by Dev3lopmentM4chine</span>
    </footer>
  );
}

export default Footer;
