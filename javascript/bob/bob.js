var Bob = function() {};

var silent = function(input) {
  return input.trim() === "";
};

var shouted = function(input) {
  return input.toUpperCase() === input && input.toUpperCase() !== input.toLowerCase();
};

var question = function(input) {
  return input[input.length - 1] === "?";
};

Bob.prototype.hey = function(input) {
  if (silent(input)) {
    return "Fine. Be that way!";
  } else if (shouted(input)) {
    return "Whoa, chill out!";
  } else if (question(input)) {
    return "Sure.";
  } else {
    return 'Whatever.';
  }
};

module.exports = Bob;
