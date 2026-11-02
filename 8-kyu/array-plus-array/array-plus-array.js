function arrayPlusArray(arr1, arr2) {
  let combinedArr = arr1.concat(arr2);
  return combinedArr.reduce((ac,c) => ac + c, 0);
}