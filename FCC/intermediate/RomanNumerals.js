function convertToRoman(num) {
  var romanNumerals = '',
      thousands = Math.floor(num / 1000),
      hundreds = Math.floor(num % 1000 / 100),
      tens = Math.floor(num % 100 / 10),
      ones = Math.floor(num % 10);

  loop('M', Math.floor(num / 1000));

  if (hundreds === 4) {
    romanNumerals += 'CD';
  } else if (hundreds === 9) {
    romanNumerals += 'CM'
  } else {
    if (hundreds >= 5 ) romanNumerals += 'D';
    loop('C', Math.floor(num % 500 / 100))
  }

  if (tens === 4) {
    romanNumerals += 'XL';
  } else if (tens === 9) {
    romanNumerals += 'XC'
  } else {
    if (tens >= 5 ) romanNumerals += 'L';
    loop('X', Math.floor(num % 50 / 10))
  }

  if (ones === 4) {
    romanNumerals += 'IV';
  } else if (ones === 9) {
    romanNumerals += 'IX'
  } else {
    if (ones >= 5 ) romanNumerals += 'V';
    loop('I', Math.floor(num % 5))
  }

  function loop(letter, times) {
    for(var i = 0; i < times; i++) {
      romanNumerals += letter;
    }
  }

  return romanNumerals;
}

console.log(convertToRoman(44));
console.log(convertToRoman(45));
console.log(convertToRoman(97));
console.log(convertToRoman(99));
