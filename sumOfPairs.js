function sumPairs(ints, s) {

  while (ints.length > 1) {
    for (let i = 1; i < ints.length; i++) {
      if (ints[0] + ints[i] === s) {
        return [ints[0], ints[i]];
      }
    }
    ints.shift();
  }
  return undefined;
}


console.log(
  sumPairs([1, 4, 8, 7, 3, 15], 8))
  // [1, 7], "Basic: [1, 4, 8, 7, 3, 15] should return [1, 7] for sum = 8"

console.log(
  sumPairs([1, -2, 3, 0, -6, 1], -6))
  // [0, -6], "Negatives: [1, -2, 3, 0, -6, 1] should return [0, -6] for sum = -6"

console.log(
  sumPairs([20, -13, 40], -7))
  // undefined, "No Match: [20, -13, 40] should return undefined for sum = -7"

console.log(
  sumPairs([1, 2, 3, 4, 1, 0], 2))
  // [1, 1], "First Match From Left: [1, 2, 3, 4, 1, 0] should return [1, 1] for sum = 2"

console.log(
  sumPairs([10, 5, 2, 3, 7, 5], 10))
  // [5, 5]

console.log(
  sumPairs([4, -2, 3, 3, 4], 8))
  // [4, 4], "Duplicates: [4, -2, 3, 3, 4] should return [4, 4] for sum = 8"

console.log(
  sumPairs([0, 2, 0], 0))
  // [0, 0], "Zeroes: [0, 2, 0] should return [0, 0] for sum = 0"

console.log(
  sumPairs([5, 9, 13, -3], 10))
  // [13, -3], "Subtraction: [5, 9, 13, -3] should return [13, -3] for sum = 10"

