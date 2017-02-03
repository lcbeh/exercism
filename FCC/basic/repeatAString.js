
function repeatStringNumTimes(str, num) {
  if( num < 0) return '';
  var string = '';

  for (var i = 0; i < num; i++) {
    string += str;
  }
  return string;
}

console.log(repeatStringNumTimes("abc", 3));
