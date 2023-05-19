function largestPairSum(numbers) {
  let max = Math.max(...numbers);
  let maxIndex = numbers.indexOf(max);
  numbers.splice(maxIndex, 1);
  let secondMax = Math.max(...numbers);
  return max + secondMax;
}

console.log(largestPairSum([10, 14, 2, 23, 19])); // 42;
console.log(largestPairSum([-100,-29,-24,-19,19])) // 0;
console.log(largestPairSum([1,2,3,4,6,-1,2])) // 10;
console.log(largestPairSum([-10, -8, -16, -18, -19])) // -18;
