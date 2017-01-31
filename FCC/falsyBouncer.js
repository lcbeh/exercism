// function bouncer(arr) {
//   var result = [];
//   arr.map(function (item) {
//     if (item) result.push(item);
//   });
//   return result;
// }

function bouncer(arr) {
  return arr.filter(Boolean);
}

console.log(bouncer([7, "ate", "", false, 9]));
