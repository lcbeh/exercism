
function chunkArrayInGroups(arr, size) {
  var result = []
  while (arr.length > 0) {
    var item = arr.splice(0, size);
    result.push(item);
  }
  return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
