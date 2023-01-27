let numbers = prompt("Enter numbers separated by comma: ");

let newInt = numbers.split(',');

let sum = 0;
for (let i = 0; i < newInt.length; i++) {
  sum += Number(newInt[i]);
}
console.log("The sum is: " + sum);