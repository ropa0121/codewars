function removeEveryOther(arr){
  arr.forEach((item, index) => {
    (index > 0) % 2 !== 0 ? arr.splice(index, 1) : item
  });
  return arr;
};