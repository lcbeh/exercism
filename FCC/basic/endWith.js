function confirmEnding(str, target) {
  var index = target.length;
  return str.substr(str.length - index) === target;
}

console.log(confirmEnding("He has to give me a new name", "name"));
