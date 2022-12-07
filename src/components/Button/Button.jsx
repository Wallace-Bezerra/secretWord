import style from "./Button.module.scss";

function Button({ text, typeButton, handleGame }) {
  return (
    <button
      className={`${style.btn} ${style[`${typeButton}`]}`}
      onClick={handleGame}
    >
      {text}
    </button>
  );
}

export default Button;
