function evaporator(content, evap_per_day, threshold){ 
  let evaporationDate = 0;
  let thresholdContentInMl = threshold/content;
  let currContent = content;
 
  while (currContent > thresholdContentInMl) {
    currContent = currContent * ((100 - evap_per_day)/100);
    evaporationDate ++;
  }

  return evaporationDate;
}

console.log(evaporator(10, 10, 5)); // => 29
console.log(evaporator(10,10,10)); // => 22