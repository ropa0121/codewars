function remove (string) {
  if(string.endsWith('!')){
    let arrStr = string.split('').slice(0 , string.length - 1).join('');
    return arrStr;
  } else {
    return string;
  }
}