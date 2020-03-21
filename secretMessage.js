let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// remove last string
secretMessage.pop()

// console.log(secretMessage)
// add the words "to" and "Program" to the end
secretMessage.push("to", "Program");

// console.log(secretMessage)

// Change the word "easily" to "right"
let indexEasily = secretMessage.indexOf("easily");
// console.log(indexEasily);
secretMessage[7] = "right";

// console.log(secretMessage)

// Remove the first word
secretMessage.shift()
// console.log(secretMessage)

// Add the work "Programming" as the first word
secretMessage.unshift("Programming");
// console.log(secretMessage);

// Remove the strings get, right, the, first, time,, and replace them with the single string know, i.e at index 6 replace 5 element with "know"
secretMessage.splice(6, 5, "know,");
// console.log(secretMessage);


console.log(secretMessage.join(" "));



