function palindrome(string) {

    // remove spaces from the string or phrase and join to form one string
    // Also convert everything to lower case

    let newString = string.split(" ").join("").toLowerCase();

    // compare the original string with itself reversed

    return newString === newString.split('').reverse().join('');
    
}

// get a string input from user
const string = prompt('Enter a string: ');

console.log(palindrome(string));