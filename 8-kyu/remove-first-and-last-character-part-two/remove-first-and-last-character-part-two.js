function array(string) {
  let newArr = string.split(',');
  if(newArr.length === 0 || newArr.length === 1 || newArr.length === 2){
    return null;
  } else if(newArr.length > 2){
    return newArr.slice(1, newArr.length - 1).join(' ');
  }
}