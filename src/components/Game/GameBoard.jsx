import { useRef, useState } from "react";
import Button from "../Button/Button";
import { motion } from "framer-motion";
import style from "./GameBoard.module.scss";
import PanelBoard from "./PanelBoard";
import { ErrorAlert } from "../ErrorAlert/ErrorAlert";
import { AnimatePresence } from "framer-motion";

function GameBoard({
  verifyLetter,
  winner,
  pickedWord,
  letters,
  guessedLetters,
  wrongLetters,
  repeatedLetters,
  guesses,
}) {
  const inputElement = useRef(null);
  const [isValid, setIsValid] = useState(true);
  const regex = new RegExp("[a-zA-Zà-úÀ-Ú]", "g");

  function handleSubmit() {
    if (regex.test(inputElement.current.value.toLowerCase())) {
      setIsValid(true);
      inputElement.current.focus();

      verifyLetter(inputElement.current.value.toLowerCase());
      inputElement.current.value = "";
    } else {
      setIsValid(false);
      inputElement.current.value = "";
      inputElement.current.focus();
    }
  }
  function handleKeyEnter(e) {
    if (e.key === "Enter") {
      if (regex.test(inputElement.current.value.toLowerCase())) {
        setIsValid(true);
        inputElement.current.focus();
        verifyLetter(inputElement.current.value.toLowerCase());
        inputElement.current.value = "";
      } else {
        setIsValid(false);
        inputElement.current.value = "";
        inputElement.current.focus();
      }
    }
  }

  return (
    <div className={style.gameBoard}>
      <h1>Tente uma letra e descubra a palavra</h1>
      <PanelBoard
        winner={winner}
        pickedWord={pickedWord}
        letters={letters}
        guessedLetters={guessedLetters}
      />

      <div className={style.inputLetter}>
        <motion.input
          animate={{
            backgroundColor: !isValid ? "#ffdcdc" : "white",
            border: !isValid ? "solid 3px red" : "none",
          }}
          transition={{ duration: 0.4 }}
          type="text"
          maxLength="1"
          required
          // onChange={(e) => {
          //   setLetter(e.target.value.toLowerCase());
          // }}
          onKeyDown={handleKeyEnter}
          ref={inputElement}
        />
        <Button text="JOGAR" typeButton="primary" handleGame={handleSubmit} />
        <AnimatePresence>
          {repeatedLetters && <ErrorAlert repeatedLetters={repeatedLetters} />}
          {/* {repeatedLetters && inputElement.current
            ? inputElement.current.setAttribute("disabled", true)
            : inputElement.current.setAttribute("disabled", false)} */}
          {/* <ErrorAlert repeatedLetters={repeatedLetters} /> */}
        </AnimatePresence>
      </div>

      <div className={style.wrongLetters}>
        {wrongLetters.map((wrongLetter) => {
          return (
            <motion.input
              className={style.inputLetter}
              initial={{ translateX: 200 }}
              animate={{ translateX: 0 }}
              transition={{ duration: 0.9, type: "spring", stiffness: 40 }}
              type="text"
              value={wrongLetter}
              disabled={true}
            />
          );
        })}
      </div>

      <motion.div
        className={style.attempt}
        transition={{ duration: 0.5 }}
        layout
      >
        <span>{guesses}</span>
        <span>TENTATIVAS</span>
      </motion.div>
    </div>
  );
}

export default GameBoard;
