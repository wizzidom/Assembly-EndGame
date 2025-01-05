import React from "react";
import { languages } from "./languages";
import { clsx } from "clsx";
//13: 45
export default function App() {
  //State Values
  const [currentWord, setCurrentWord] = React.useState("REACT");
  const [guessedLetters, setGuessedLetters] = React.useState([]);

  //Derived values
  let wrongGuessCount = 0;
  let wrongGuessArray = guessedLetters.map((letter) => {
    if (!currentWord.includes(letter.toUpperCase())) {
      wrongGuessCount += 1;
    }
  });
  console.log(wrongGuessCount);

  //Static values
  let lettersArray = Array.from(currentWord);
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  let red;
  function choose(id) {
    setGuessedLetters((prevLetters) =>
      prevLetters.includes(id) ? prevLetters : [...prevLetters, id]
    );
  }

  return (
    <main>
      <header>
        <h1>Assembly Endgame</h1>
        <p>
          Guess the word within 8 attempts to keey the programming languages
          safe from Assembly!
        </p>
      </header>
      <section className="game-status">
        <h2>You Win</h2>
        <p>Well done</p>
      </section>
      <section className="languages">
        {languages.map((language) => (
          <p
            key={language.name}
            style={{
              color: language.color,
              background: language.backgroundColor,
            }}
          >
            {language.name}
          </p>
        ))}
      </section>
      <section className="letters">
        {lettersArray.map((letter, index) => (
          <span key={index}>
            {guessedLetters.includes(letter.toUpperCase()) &&
            lettersArray.includes(letter.toUpperCase())
              ? letter
              : ""}
          </span>
        ))}
      </section>
      <section className="keyboard">
        {alphabets.split("").map((alphabet) => {
          const isGuessed = guessedLetters.includes(alphabet.toUpperCase());
          const isCorrect =
            isGuessed && lettersArray.includes(alphabet.toUpperCase());
          const iswrong =
            isGuessed && !lettersArray.includes(alphabet.toUpperCase());
          const className = clsx({ chosen: isCorrect, wrong: iswrong });

          return (
            <button
              className={className}
              key={alphabet}
              onClick={() => choose(alphabet.toUpperCase())}
            >
              {alphabet.toUpperCase()}
            </button>
          );
        })}
      </section>

      <button className="newgame">New Game</button>
    </main>
  );
}
