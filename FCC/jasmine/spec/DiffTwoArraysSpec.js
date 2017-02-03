describe('DiffTwoArrays Test', function () {
  var arr1,
      arr2;

  beforeEach(function () {
  });

  it('sort the two arrays by their length', function () {
    arr1 = [1, 2, 3, 5];
    arr2 = [1, 2, 3, 4, 5];

    expect(sortArray(arr1, arr2)).toEqual([[1, 2, 3, 5], [1, 2, 3, 4, 5]]);
  });
});

function sortArray(arr1, arr2) {
  var arrays = [arr1, arr2];

  var sorted = arrays.sort(function (a, b) {
    return a.length - b.length;
  });

  return sorted;
}
