'use strict';

function rot13(str) {
  var i = 0;
  var transformedCode = [];

  while (i < str.length) {
    if (str[i].match(/[A-Z]/)) {
      var code = str[i].charCodeAt(0) + 13;
      if (code > 90) code -= 26;
      transformedCode.push(String.fromCharCode(code));
    } else {
      transformedCode.push(str[i]);
    }
    i++;
  }
  return transformedCode.join('');
}

console.log(rot13("SERR YBIR?"));
