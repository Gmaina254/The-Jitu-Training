function anagram(string1, string2){
  if (string1.length !== string2.length) return false;

  let sortedStr1 = string1.split("").sort().join("");
  let sortedStr2 = string2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
}

console.log(anagram('MAINA', 'AINAM'))
console.log(anagram("MAINA", "MAISH"));
console.log(anagram("MAINA", "JANE"));