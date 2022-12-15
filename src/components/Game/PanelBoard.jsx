import style from "./PanelBoard.module.scss";
import { motion } from "framer-motion";
function PanelBoard({ letters, guessedLetters, winner }) {
  return (
    <motion.div
      className={style.panelBoard}
      animate={{ border: true ? "solid 17px #FFFB04" : "white", opacity: [0, 1] }}
      transition={{ loop: Infinity, duration: 0.8, }}
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
    </motion.div >
  );
}

export default PanelBoard;
