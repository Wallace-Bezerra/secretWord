import style from "./PanelBoard.module.scss";

function PanelBoard({ letters, guessedLetters }) {
  return (
    <div className={style.panelBoard}>
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
    </div>
  );
}

export default PanelBoard;
