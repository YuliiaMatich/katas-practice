function roundToNext5(n) {

  let mod = n % 5;
  if (n === 0) {
    return 0;
  }

  if (n % 5 === 0) {
    return n;
  }

  
  return n + (5 - mod) ;
}

console.log(roundToNext5(0));
console.log(roundToNext5(1));
console.log(roundToNext5(2));
console.log(roundToNext5(3));
console.log(roundToNext5(4));

