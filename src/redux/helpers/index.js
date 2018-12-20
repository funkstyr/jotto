export const getLetterMatchCount = (guess, answer) => {

    const answerSet = new Set(answer.split(''));
    const guessSet = new Set(guess.split(''));

    return [...answerSet].filter(letter => guessSet.has(letter)).length;
};