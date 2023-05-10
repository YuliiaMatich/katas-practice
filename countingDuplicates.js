function duplicateCount(text) {
  let lowerCase = text.toLowerCase();
  let object = {};
  let result = 0;

  if (text.length === 0) {
    return 0;
  }

  for (let i = 0; i < lowerCase.length; i++) {
    if (!object[lowerCase[i]]) {
      object[lowerCase[i]] = 1;
    } else {
      object[lowerCase[i]]++;
    }
  }

  for (let char in object) {
    if (object[char] > 1) {
      result++;
    }
  }
  return result;
}

console.log(duplicateCount("aAAAbBcde"));
console.log(duplicateCount(""));
