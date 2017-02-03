function convertToRoman(num) {
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
      roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'],
      romanNumerals = '';

  for(var i = 0; i < decimal.length; i++) {
    while(num <= decimal[i]) {
      romanNumerals += roman[i];
      num -= decimal[i];
    }
  }
  return romanNumerals;
}

console.log(convertToRoman(44));
console.log(convertToRoman(45));
console.log(convertToRoman(97));
console.log(convertToRoman(99));
