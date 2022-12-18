import style from "./PanelBoard.module.scss";
import { motion } from "framer-motion";
function PanelBoard({ letters, guessedLetters, winner }) {
  return (
    <motion.div
      className={style.panelBoard}
      animate={{
        border: winner ? "solid 17px #fcdd09" : null,
        boxShadow: winner ? "0px 0px 15px #fcdd09" : null,
      }}
      transition={{
        duration: 0.8,
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
