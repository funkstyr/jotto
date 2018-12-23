import words from "./wordlist";

export const getLetterMatchCount = (guess, answer) => {
  const answerSet = new Set(answer.split(""));
  const guessSet = new Set(guess.split(""));

  return [...answerSet].filter(letter => guessSet.has(letter)).length;
};

export const getRandomWord = () => {
  const index = Math.floor(Math.random() * words.length);
  return words[index];
};
