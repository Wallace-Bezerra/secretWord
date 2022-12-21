import style from "./PanelBoard.module.scss";
import { motion } from "framer-motion";
function PanelBoard({ letters, guessedLetters, winner }) {
  return (
    <motion.div
      className={style.panelBoard}
      animate={{
        border: winner
          ? "solid 17px #fcdd09"
          : "solid 17px rgba(255, 255, 255, 0.812)",
        boxShadow: winner
          ? "0px 0px 15px #fcdd09"
          : "0px 0px 9px rgba(255, 255, 255, 0.8)",
      }}
      transition={{
        duration: 0.4,
      }}
    >
      <div className={style.panelLetter}>
        {letters.map((letter, index) => {
          return guessedLetters.includes(letter) ? (
            <input
              key={index}
              className={style.letter}
              type="text"
              value={letter}
              disabled={true}
            />
          ) : (
            <input
              key={index}
              className={style.letter}
              type="text"
              value=""
              disabled={true}
            />
          );
        })}
      </div>
    </motion.div>
  );
}

export default PanelBoard;
