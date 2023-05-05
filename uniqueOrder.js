//Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

const uniqueInOrder = function (iterable) {
  let result = [];

  let array = iterable.split("");

  if (array.length === 0) {
    return [];
  }
  
  result.push(array[0]);
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] !== array[i + 1]) {
      result.push(array[i + 1]);
    }
  }
  return result;
};

console.log(uniqueInOrder("AAAABBBCCDAABBB"));

