import React from "react";
import words from "../assets/words.json";

const GenerateWords = () => {
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

  return (
    <div>
      {word1} {word2} {word3} {word4} {word5} {word6} {word7} {word8} {word9}{" "}
      {word10}
    </div>
  );
};

export default GenerateWords;
