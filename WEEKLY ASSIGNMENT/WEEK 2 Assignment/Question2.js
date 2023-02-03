// let str = prompt("Enter a sentence: ");

function maxLengthWord(sentence) {
  let words = sentence.split(" ");
  let max_length = 0;
  let longestWord = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > max_length) {
      max_length = words[i].length;
      longestWord = words[i];
    }
  }

  console.log(longestWord);
}

maxLengthWord("Practice your skills in a hands-on, setup-free coding environment.");

// maxLengthWord(str);
