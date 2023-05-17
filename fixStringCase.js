function solve(s) {
  let uppercase = 0;
  let lowercase = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i].toUpperCase() === s[i]) {
      uppercase++;
    } else {
      lowercase++;
    }
  }

  if (lowercase < uppercase) {
    return s.toUpperCase();
  } else if (lowercase === uppercase) {
    return s.toLowerCase();
  } else {
    return s.toLowerCase();
  }
}

console.log(solve("code")); //"code";
console.log(solve("CODe")); //"CODE";
console.log(solve("COde")); //"code";
console.log(solve("Code")); //"code";

// you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on: make as few changes as possible. if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
