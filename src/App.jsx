import React from "react";
import { languages } from "./languages";

export default function App() {
  const [currentWord, setCurrentWord] = React.useState("react");
  let lettersArray = Array.from(currentWord);
  const alphabets = "abcdefghijklmnopqrstuvwxyz";

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
          <span key={index}>{letter.toUpperCase()}</span>
        ))}
      </section>

      <section className="keyboard">
        {alphabets.split("").map((alphabet) => (
          <button key={alphabet}>{alphabet.toUpperCase()}</button>
        ))}
      </section>

      <button className="newgame">New Game</button>
    </main>
  );
}
