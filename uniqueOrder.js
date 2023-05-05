//Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

const uniqueInOrder = function (iterable) {
  let result = [];

  if (typeof iterable === "string") {
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
  }

  if (typeof iterable === "object") {
    if (iterable.length === 0) {
      return [];
    }

    result.push(iterable[0]);
    for (let i = 0; i < iterable.length - 1; i++) {
      if (iterable[i] !== iterable[i + 1]) {
        result.push(iterable[i + 1]);
      }
    }
    return result;
  }
};

console.log(uniqueInOrder("AAAABBBCCDAABBB"));
console.log(uniqueInOrder([1, 2, 3, 3, 3]));
