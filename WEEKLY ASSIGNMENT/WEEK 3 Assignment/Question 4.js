// remove undefined, null and zero

let arr = ["scale", 3, 4, "hey", "", null, false];

function clean(arr) {
  return arr.filter(Boolean);
}

console.log(clean(arr));
