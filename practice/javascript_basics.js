// Print hello and world in two line 
console.log('Hello World!');

// Ask for user input and log it into variable named userInput 
var userInput = prompt('What is your name?');
console.log(userInput);
alert('Hello'+ userInput);

// String Concatenation 
var a = "Hello";
var b = "World";
var c = a + " " + b;

// Get the length of a string 
a.length

var userInput = prompt('What is your message?');
var messageMaxLength = 300;
var messageLength = userInput.length;
if (messageLength > messageMaxLength) {
  alert('Your message exceeds the maximum length');
} else {
    var remainingCharacters = messageMaxLength - messageLength;
    alert('Your message is ' + messageLength + ' characters long and you have ' + remainingCharacters + ' remaining characters');

}
