const quarterOf = (n) => {
  if(n <= 3){
    return 1
  } else if (n>= 4 && n <= 6){
    return 2
  } else if (n >= 7 && n <= 9){
    return 3
  } else {
    return 4
  }
  
}