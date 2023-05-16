function findNextSquare(sq) {
  let squareRoot = Math.sqrt(sq);
  if (squareRoot % 1 === 0){
    return Math.pow(squareRoot + 1, 2)
  } else {
    return -1;
  }
}