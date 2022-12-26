// React
import { useCallback, useState, useEffect } from "react";
// data
import { wordsList } from "./data/words.js";
// components
import StartScreen from "./components/StartScreen/StartScreen.jsx";
import Game from "./components/Game/Game";
import End from "./components/End/End";

//stages
const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  //States do game
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words, setWords] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [repeatedLetters, setRepeatedLetters] = useState(null);
  const [guesses, setGuesses] = useState(10);
  const [score, setScore] = useState(0);
  const [winner, setWinner] = useState(false);

  useEffect(() => {
    if (guesses <= 0) {
      //reset
      setTimeout(() => {
        cleanState();
        setGuesses(10);
        setGameStage(stages[2].name);
      }, 3000);
    }
  }, [guesses]);

  function cleanState() {
    setWinner(false);
    setWrongLetters([]);
    setGuessedLetters([]);
  }

  function pickWordAndCategory() {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * categories.length)];
    const wordCategory = words[category];
    const wordPick =
      wordCategory[
        Math.floor(Math.random() * wordCategory.length)
      ].toLowerCase();

    return { wordPick, category };
  }

  const startGame = useCallback(() => {
    cleanState();
    setGameStage(stages[1].name);
    // picked word and picked letters
    const { wordPick, category } = pickWordAndCategory();

    // console.log(`Palavra: ${wordPick} Categoria: ${category}`);

    const letters = wordPick.split("");
    setPickedWord(wordPick);
    setPickedCategory(category);
    setLetters(letters);
  }, []);

  function verifyLetter(letter) {
    if (guessedLetters.includes(letter) || wrongLetters.includes(letter)) {
      setRepeatedLetters(letter);
      setTimeout(() => {
        setRepeatedLetters(null);
      }, 3000);
      return;
    }

    if (letters.includes(letter)) {
      setGuessedLetters((prevLetters) => [...prevLetters, letter]);
    } else {
      setWrongLetters([...wrongLetters, letter]);
      setGuesses((guess) => guess - 1);
    }
  }

  useEffect(() => {
    if (letters.length !== 0) {
      const uniqueLetters = [...new Set(letters)];
      if (guessedLetters.length === uniqueLetters.length) {
        let newScore = score;
        setScore((newScore += 100));
        setWinner(true);
        setTimeout(() => {
          setGuessedLetters([]);
          startGame();
        }, 4000);
      }
    }
  }, [guessedLetters, letters, startGame]);

  function homeGame() {
    setScore(0);
    setGameStage(stages[0].name);
  }
  function retryGame() {
    setScore(0);
    startGame();
  }

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && (
        <Game
          verifyLetter={verifyLetter}
          winner={winner}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          repeatedLetters={repeatedLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === "end" && (
        <End retryGame={retryGame} homeGame={homeGame} score={score} />
      )}
    </div>
  );
}

export default App;
