function diffArray(arr1, arr2) {
  var arr = arr1.concat(arr2);
  var diff = arr.filter(function (element) {
    return !arr1.includes(element) || !arr2.includes(element);
  });
  return diff;
}

console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
