function mutation(arr) {
  var string1 = arr[0].toLowerCase();
  var string2 = arr[1].toLowerCase();
  var letters = string2.split('');

  function match(letter) {
    return string1.indexOf(letter) >= 0;
  }
  return letters.every(match);
}

console.log(mutation(["hello", "hey"]));
