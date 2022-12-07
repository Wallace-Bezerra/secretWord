import { useRef, useState } from "react";
import Button from "../Button/Button";
import style from "./GameBoard.module.scss";
import PanelBoard from "./PanelBoard";

function GameBoard({
  verifyLetter,
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
    <div className={style.gameBoard}>
      <h1>Tente uma letra e descubra a palavra</h1>
      <PanelBoard
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
    </div>
  );
}

export default GameBoard;
