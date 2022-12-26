import style from "./ErrorAlert.module.scss";
import { motion } from "framer-motion";
export const ErrorAlert = ({ repeatedLetters }) => {
  return (
    <motion.span
      key="exitError"
      className={style.errorAlert}
      initial={{ x: -600, opacity: 1 }}
      animate={{
        x: -400,
        opacity: 1,
        transition: {
          duration: 1,
          type: "spring",
          stiffness: 40,
        },
      }}
      exit={{
        x: -600,
        opacity: 0,
        transition: { duration: 0.5 },
      }}
    >
      Letra {repeatedLetters ? repeatedLetters.toUpperCase() : null} já usada!
    </motion.span>
  );
};
