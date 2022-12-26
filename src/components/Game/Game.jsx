import style from "./Game.module.scss";
import { motion } from "framer-motion";
import Button from "../Button/Button";
import GameBoard from "./GameBoard";

function Game({
  verifyLetter,
  pickedWord,
  winner,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  repeatedLetters,
  guesses,
  score,
}) {
  return (
    <motion.div
      className={style.bg}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <header>
        <div className={style.header}>
          <div className={style.redes}>
            <a href="https://github.com/Wallace-Bezerra" target="_blank">
              <img src="/GitHub.svg" alt="github" />
            </a>
            <a
              href="https://www.linkedin.com/in/wallace-bezerra/"
              target="_blank"
            >
              <img src="/Linkdin.svg" alt="linkdin" />
            </a>
          </div>
          <div className={style.dica}>
            <span>{pickedCategory}</span>
          </div>
          <div className={style.score}>
            <span className={style.points}>PONTOS</span>
            <span className={style.numberPoints}>{score}</span>
          </div>
        </div>
      </header>
      <GameBoard
        verifyLetter={verifyLetter}
        pickedWord={pickedWord}
        winner={winner}
        letters={letters}
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        repeatedLetters={repeatedLetters}
        guesses={guesses}
      />
    </motion.div>
  );
}

export default Game;
