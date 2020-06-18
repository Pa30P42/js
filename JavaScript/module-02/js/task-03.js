let longestWord = "";

const findLongestWord = function (string) {
  let words = string.split(" ");

  for (const word of words) {
    if (longestWord.length <= word.length) {
      longestWord = word;
    }
  }
  return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("Google do a roll"));
console.log(findLongestWord("May the force be with you"));
