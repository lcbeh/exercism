function getIndexToIns(arr, num) {
  arr.sort(function (a,b) {
    return a - b;
  });

  function isBigger (element) {
    return element >= num;
  }

  if (num > arr[arr.length - 1]) return arr.length;
  var element = arr.find(isBigger);
  return arr.indexOf(element);

}

console.log(getIndexToIns([2, 5, 10], 15));
