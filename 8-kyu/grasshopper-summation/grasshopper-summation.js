var summation = function (num) {
  let result = [];
  for(let i = 1; i<= num; i++){
    result.push(i)
  }
  return result.reduce((ac,c) => ac + c, 0)
}