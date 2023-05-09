function sumDigits(number) {
  let result = 0;
  
  let array = Math.abs(number).toString().split("")
  for (let number of array){
    result = result + (Number(number));
  }
  return result;
};

console.log(sumDigits(10)); //1
console.log(sumDigits(99)); //18
console.log(sumDigits(-32));