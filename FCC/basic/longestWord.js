function findLongestWord(str) {
  var words = str.split(' ');
  var longestWord = '';
  words.forEach(function (word) {
    console.log(word);
    if(word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord.length;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
