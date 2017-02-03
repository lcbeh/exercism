function Words() {}

var sentence = function (sentence) {
  return sentence.split(' ')
}

var compactSentence = function (sentence) {
  return sentence.split(',')
}

// check input format and split words correctly
Words.prototype.checkFormat= function (input) {
  compactSentence(input) // if there is no space in sentence
  return sentence(input) // if there is space in sentence
};

Words.prototype.count = function (input) {
  var words = this.checkFormat(input)
  var wordCount = {}

  words.forEach(function(word) {
    if (wordCount.hasOwnProperty(word)) {
      wordCount[word]++
    } else {
      wordCount[word] = 1
    }
  })
  console.log(wordCount)
  return wordCount
}

module.exports = Words;
