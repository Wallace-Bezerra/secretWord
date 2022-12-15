import style from "./Game.module.scss";
import { motion } from "framer-motion"
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
  guesses,
  score,
}) {
  return (
    <motion.div
      className={style.bg}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}>
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
        winner={winner}
        letters={letters}
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        guesses={guesses}
      />
      <Button handleGame={verifyLetter} text="FIM" />
    </motion.div>
  );
}

export default Game;
