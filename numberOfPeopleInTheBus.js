const number = function(busStops){
  let result = 0;
  
  for (let stop of busStops){
    result = result + stop[0] - stop[1];
  }
  
  return result;
}

console.log((number([[10,0],[3,5],[5,8]]))) // 5;
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])) //17;


// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop. Your task is to return the number of people who are still on the bus after the last bus stop (after the last array).