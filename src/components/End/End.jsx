import style from "./End.module.scss";
import Button from "../Button/Button";

function End({ retryGame, homeGame, score }) {
  return (
    <div className={style.bg}>
      <div className={style.card}>
        <h1>FIM DE JOGO</h1>
        <div className={style.scoreGame}>
          <span>SUA PONTUAÇÃO : {score}</span>
        </div>
        <div className={style.btns}>
          <Button text="INICIO" handleGame={homeGame} typeButton="secondary" />
          <Button
            handleGame={retryGame}
            text="JOGAR NOVAMENTE"
            typeButton="play"
          />
        </div>
      </div>
    </div>
  );
}
export default End;
