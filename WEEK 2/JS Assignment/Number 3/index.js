function arrLastAndLength(arr) {
  let lastElement = arr[arr.length - 1]
  let arrayLength = arr.length
  return {lastElement, arrayLength};
};
  

console.log(arrLastAndLength([1, 2, 3, 4, 6, 8 ,9]));
