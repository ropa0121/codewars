function addLength(str) {
   let striLength = str.split(' ').map((item) => item + ` ${item.length}`);
   return striLength;
}
​