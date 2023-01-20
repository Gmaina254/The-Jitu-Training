// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
let num1, num2, num3, num4, num5;

num1 = prompt("Enter a number: ");
num2 = prompt("Enter a number: ");
num3 = prompt("Enter a number: ");
num4 = prompt("Enter a number: ");
num5 = prompt("Enter a number: ");

function largestNumber(num_1, num_2, num_3, num_4, num_5) {
  let largest = num_1;

  if (num_2 > largest) {
    largest = num_2;
  }

  if (num_3 > largest) {
    largest = num_3;
  }

  if (num_4 > largest) {
    largest = num_4;
  }

  if (num_5 > largest) {
    largest = num_5;
  }

  console.log(largest + " Is the largest number.");
}

largestNumber(num1, num2, num3, num4, num5);
