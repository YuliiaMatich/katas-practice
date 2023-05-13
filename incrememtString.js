function incrementString (strng) {
  let array = strng.split("");
  let lastEl = parseInt(array[array.length - 1]);
  let letters = [];
  let numbers = [];
 
  if (!lastEl) {
    return strng + 1
  };

  for (let i = 0; i < array.length; i++) {
    if (parseInt(array[i])) {
      numbers.push(array[i]);
    } else {
      letters.push(array[i]);
    }
  }

  let resultString = letters.join("");
  let resultNumbers = parseInt(numbers.join("")) + 1;
  return resultString + resultNumbers;
 }


 console.log(incrementString("foo")); //foo1;
 console.log(incrementString("foobar23")); //foobar24
 console.log(incrementString("foo0042")); // foo0043
 console.log(incrementString("foo9")); // foo10;
 console.log(incrementString("foo099")); // foo0100;
