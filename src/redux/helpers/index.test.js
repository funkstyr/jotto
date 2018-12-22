import { getLetterMatchCount } from "./";

const secretWord = "party";
const noMatches = "bones";
const threematches = "train";
const dupematches = "parka";

describe("getLetterMatchCount", () => {
  describe("returns correct count with", () => {
    it("no matching letters", () => {
      const count = getLetterMatchCount(noMatches, secretWord);
      expect(count).toBe(0);
    });

    it("3 matching letters", () => {
      const count = getLetterMatchCount(threematches, secretWord);
      expect(count).toBe(3);
    });

    it("duplicate matching letters", () => {
      const count = getLetterMatchCount(dupematches, secretWord);
      expect(count).toBe(3);
    });

    it("all matching letters", () => {
      const count = getLetterMatchCount(secretWord, secretWord);
      expect(count).toBe(secretWord.length);
    });
  });
});
