function disemvowel(str) {
  return str.split('').filter((char) => !'aeiouAEIOU'.split('').includes(char)).join('');
}