// return sum of user inputs
let numbers = prompt("Enter numbers separated by comma: ");

// The split() method splits the user input into an array of strings
//each element of the array representing one of the numbers entered by the user

let newInt = numbers.split(',');

let sum = 0;
for (let i = 0; i < newInt.length; i++) {

    // use Number to convert the string to a number
  sum += Number(newInt[i]);
}
console.log("The sum is: " + sum);