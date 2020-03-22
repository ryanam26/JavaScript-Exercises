let input = "a whale of a deal!";

let vowels = ["a","e","i","o","u"];

let resultArray = [];

// Compare input arr with the vowels arr, if equal and if letter equal "e" or "u" double it and 
// push to the resultArray.

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      if (input[i] === "e") {
        resultArray.push("ee");
      } else if (input[i] === "u") {
        resultArray.push("uu");
      } else {
      resultArray.push(input[i]);  
      }
    }
  }
};
console.log(resultArray.join("").toUpperCase())

