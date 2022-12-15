import { useRef, useState } from "react";
import Button from "../Button/Button";
import { motion } from "framer-motion";
import style from "./GameBoard.module.scss";
import PanelBoard from "./PanelBoard";

function GameBoard({
  verifyLetter,
  winner,
  pickedWord,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
}) {
  const [letter, setLetter] = useState("");
  const inputElement = useRef();

  function handleSubmit() {
    inputElement.current.focus();
    verifyLetter(letter);
    setLetter("");
  }
  function handleKeyEnter(e) {
    if (e.key === "Enter") {
      inputElement.current.focus();
      verifyLetter(letter);
      setLetter("");
    }
  }

  return (
    <motion.div
      className={style.gameBoard}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <h1>Tente uma letra e descubra a palavra</h1>
      <PanelBoard
        winner={winner}
        pickedWord={pickedWord}
        letters={letters}
        guessedLetters={guessedLetters}
      />

      <div className={style.inputLetter}>
        <input
          type="text"
          maxLength="1"
          required
          onChange={(e) => {
            setLetter(e.target.value.toLowerCase());
          }}
          onKeyDown={handleKeyEnter}
          value={letter}
          ref={inputElement}
        />
        <Button text="JOGAR" typeButton="primary" handleGame={handleSubmit} />
      </div>

      <div className={style.wrongLetters}>
        {wrongLetters.map((wrongLetter) => {
          return (
            <input
              className={style.inputLetter}
              type="text"
              value={wrongLetter}
              disabled={true}
            />
          );
        })}
      </div>
      <div className={style.attempt}>
        <span>{guesses}</span>
        <span>TENTATIVAS</span>
      </div>
    </motion.div>
  );
}

export default GameBoard;
