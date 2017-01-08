var Bob = function() {};

Bob.prototype.hey = function(input) {
  if (input === false) return 'Fine. Be that way!';
  if (input === input.toUpperCase()) return 'Whoa, chill out!';
  if (input.includes('?')) return 'Sure.';
  return 'Whatever.';
};

module.exports = Bob;
