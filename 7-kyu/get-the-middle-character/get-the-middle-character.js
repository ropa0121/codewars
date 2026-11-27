function getMiddle(s) {
  if(s.length % 2 > 0){
    return s[Math.floor(s.length/2)]
  } else if (s.length % 2 == 0){
    return `${s[Math.floor((s.length - 1)/2)]}${s[s.length/2]}`
  } else{
    return s
  }
};