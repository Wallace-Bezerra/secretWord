import style from "./Button.module.scss";

function Button({ text, typeButton, handleGame, disabled }) {
  return (
    <button
      className={`${style.btn} ${style[`${typeButton}`]}`}
      onClick={handleGame}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;
