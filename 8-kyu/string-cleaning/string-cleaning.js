function stringClean(s){
  return s.split("").filter((char) => isNaN(parseInt(char)) == true).join('')
}