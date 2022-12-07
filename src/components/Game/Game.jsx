import style from "./Game.module.scss";
import Button from "../Button/Button";
import GameBoard from "./GameBoard";

function Game({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) {
  return (
    <div>
      <div className={style.bg}>
        <header>
          <div className={style.dica}>
            <span>{pickedCategory.toUpperCase()}</span></div>
          <div className={style.score}>
            <span className={style.points}>PONTOS</span>
            <span className={style.numberPoints}>{score}</span>
          </div>
        </header>
        <GameBoard
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
        />
        <Button handleGame={verifyLetter} text="FIM" />
      </div>
    </div>
  );
}

export default Game;
