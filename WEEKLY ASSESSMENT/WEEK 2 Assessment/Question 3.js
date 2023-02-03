let str = "1"; 

str = + !str; 

Console.log(typeof str); 

// Uncaught ReferenceError: Console is not defined

// JavaScript is a case sensitive language, 
// hence Console.log returns an error since it's not recogonized.
// console.log is an in-built JS function which is always in lowercase.
