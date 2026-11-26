function highAndLow(numbers){
  let result = numbers.split(' ').sort((a,b) => (a - b));
  return `${result[result.length - 1]} ${result[0]}` 
}