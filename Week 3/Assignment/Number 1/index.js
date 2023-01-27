// get a string from user
let str = prompt("Enter a string: ")

function stringReversed(string) {
    let words = string.split(" ");
    words.reverse();

    //add a space between the words of the new string(reversed original string))
    return words.join(" ")
    
}

console.log(stringReversed(str))