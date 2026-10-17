function doubleChar(str) {
  return str
  .split('')
  .map((letter) => letter.length == 1 ? letter + letter : letter)
  .join('');
}
​