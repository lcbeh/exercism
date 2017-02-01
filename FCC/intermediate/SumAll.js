function sumAll(arr) {
  var first = Math.min(arr[0],arr[1]);
  var last = Math.max(arr[0],arr[1]);
  var numbers = [];

  for(var i = first; i <= last; i++) {
    numbers.push(i);
  }

  var sum = numbers.reduce(function (sum, number) {
    return sum + number;
  });

  return sum;
}

console.log(sumAll([10, 5]));
