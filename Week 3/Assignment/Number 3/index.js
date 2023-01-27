let arr = [
  "scale",
  "SCALE",
  "happy",
  "strength",
  "peace",
  "happy",
  "happy",
  "HAPPY",
];

function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item.toLowerCase()) === index);
}

console.log(removeDuplicates(arr));
