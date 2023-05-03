function diamond(n){
  let result = "";
  if (n < 1 || n % 2 === 0) {
    return null;
  }

  if (n === 1) {
    result += "*\n"
  }

  for (let i = 1; i <=n; i+=2) {
    let space = " ".repeat((n - i)/2)
    result += space + "*".repeat(i) + space + "\n";
  }
  for (let j = n-2; j >= 1; j-=2) {
    let space = " ".repeat((n - j)/2)
    result += space + "*".repeat(j) + space + "\n";
  }


  return result;
}

console.log(diamond(7));
