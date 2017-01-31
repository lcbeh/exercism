function palindrome(str) {
  return str.replace(/[\W_]/g, '').toLowerCase() === str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
}

console.log(palindrome("race car"));
console.log(palindrome("hello"));
