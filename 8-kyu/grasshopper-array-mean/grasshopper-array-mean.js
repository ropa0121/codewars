function findAverage(nums) {
  return nums.reduce((ac,c) => ac + c, 0) / nums.length
}