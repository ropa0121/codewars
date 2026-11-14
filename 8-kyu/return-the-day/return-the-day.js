function whatday(num) { 
  let week = ['Wrong, please enter a number between 1 and 7','Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  return num >= 1 && num <= 7 ? week[num] : week[0];
}