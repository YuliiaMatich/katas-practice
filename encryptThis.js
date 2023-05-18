// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter

const encryptThis = function(text) {
  
  let array = text.split(" ");
  let result = [];

  if (text.length === 1){
    return array[0].charCodeAt(0).toString();
  }

  for (let i = 0; i < array.length; i++){
    let word = "";
    if (array[i].length === 1) {
      word += array[i].charCodeAt(0); 
    } else if ((array[i].length === 2)) {
      word = word + array[i].charCodeAt(0) + array[i][array[i].length - 1];
    } else if ((array[i].length === 3)) {
      word = word + array[i].charCodeAt(0) + array[i][array[i].length - 1] + array[i][1];
    } else {
      word = word + array[i].charCodeAt(0) + array[i][array[i].length - 1] + array[i].slice(2, array[i].length - 1) + array[i][1];
    }
    result.push(word);
  }
  return result.join(" ");
}
console.log(encryptThis("A")) // "65";
console.log(encryptThis("A wise old owl lived in an oak")) // "65 119esi 111dl 111lw 108dvei 105n 97n 111ka";
console.log(encryptThis("The more he saw the less he spoke")) // "84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp";
console.log(encryptThis("The less he spoke the more he heard")) // "84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare";
console.log(encryptThis("Why can we not all be like that wise old bird")) // "87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri";
console.log(encryptThis("Thank you Piotr for all your help")) // "84kanh 121uo 80roti 102ro 97ll 121ruo 104ple";    