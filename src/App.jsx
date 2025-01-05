import React from "react";
import { languages } from "./languages";
import { clsx } from "clsx";
//13: 45
export default function App() {
  //State Values
  const [currentWord, setCurrentWord] = React.useState("REACT");
  const [guessedLetters, setGuessedLetters] = React.useState([]);

  //Derived values
  let wrongGuessCount = [];
  let count = -1;
  let wrongGuessArray = guessedLetters.map((letter, index) => {
    if (!currentWord.includes(letter.toUpperCase())) {
      count += 1;
      wrongGuessCount.push(count);
    }
  });
  console.log(wrongGuessCount);

  //Static values
  let isGameLost = wrongGuessCount.length >= languages.length - 1;
  let isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  let isGameOver = isGameLost || isGameWon;
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
        {isGameWon && (
          <div id="win">
            <h2>You Win</h2>
            <p>Well done, you are safe from assembly</p>
          </div>
        )}
        {isGameLost && (
          <div id="lose">
            <h2>You Lose</h2>
            <p>Good luck trying to learn assembly</p>
          </div>
        )}
      </section>
      <section className="languages">
        {languages.map((language, index) => (
          <p
            key={index}
            style={{
              color: language.color,
              background: language.backgroundColor,
              opacity: wrongGuessCount.includes(index) ? "0.2" : "1",
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
      {isGameOver ? (
        ""
      ) : (
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
      )}

      {isGameOver && (
        <button className="newgame" onClick={() => window.location.reload()}>
          New Game
        </button>
      )}
    </main>
  );
}
