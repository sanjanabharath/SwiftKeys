import React, { useState } from "react";
import words from "../assets/words.json";

const GenerateWords = () => {
  const [state, setState] = useState("");
  const randomNum = Math.floor(Math.random() * (1000 - 0 + 1)) + 0;
  const word1 = words.words[randomNum];
  const word2 = words.words[(randomNum + 10) % 1000];
  const word3 = words.words[(randomNum + 1) % 1000];
  const word4 = words.words[(randomNum + 2) % 1000];
  const word5 = words.words[(randomNum + 4) % 1000];
  const word6 = words.words[(randomNum + 77) % 1000];
  const word7 = words.words[(randomNum + 43) % 1000];
  const word8 = words.words[(randomNum + 56) % 1000];
  const word9 = words.words[(randomNum + 88) % 1000];
  const word10 = words.words[(randomNum + 87) % 1000];
  let counter = 0;
  let n = 1;

  const currentWord = () => {
    if (n == 1) return word1;
    if (n == 2) return word2;
    if (n == 3) return word3;
    if (n == 4) return word4;
    if (n == 5) return word5;
    if (n == 6) return word6;
    if (n == 7) return word7;
    if (n == 8) return word8;
    if (n == 9) return word9;
    if (n == 10) return word10;
  };

  const handle = (event: any) => {
    let current = currentWord();
    if (typeof current === "string") {
      console.log(current.charAt(counter));
      if (event.key == current.charAt(counter)) {
        console.log(true);
        console.log(event.key);
        counter++;
      }
    }

    if (event.key == " ") {
      n++;
      counter = 0;
    }
  };

  return (
    <div>
      <input
        type="text"
        onKeyDown={(e) => handle(e)}
        style={{ zIndex: "-99" }}
      />
      {word1} {word2} {word3} {word4} {word5} {word6} {word7} {word8} {word9}{" "}
      {word10}
    </div>
  );
};

export default GenerateWords;
