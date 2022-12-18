import Button from "../Button/Button";
import style from "./StartScreen.module.scss";

function StartScreen({ startGame }) {
  return (
    <div className={style.bg}>
      <div className={style.card}>
        <h1>Secret Word</h1>
        <Button
          handleGame={startGame}
          text="INICIAR O JOGO"
          typeButton="play"
        />
      </div>
    </div>
  );
}

export default StartScreen;
