function isPalindrome(x) {
  let reversed = x.split('').reverse().join('').toUpperCase();
  return x.toUpperCase() === reversed ? true : false;
}