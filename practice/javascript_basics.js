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
var messageMaxLength = 100;
var messageLength = userInput.length;
if (messageLength > messageMaxLength) {
  alert('Your message exceeds the maximum length');
  var newMessage = userInput.slice(0, messageMaxLength);
  alert(newMessage + ' Its length is '+ (newMessage.length));
} else {
    var remainingCharacters = messageMaxLength - messageLength;
    alert('Your message is ' + messageLength + ' characters long and you have ' + remainingCharacters + ' remaining characters');
}

// string slicing
var name = 'John';
console.log(name.slice(0,3))

// Uppercase string
var name = 'John';
console.log(name.toUpperCase()) ;

// Lowercase string
var name = 'John';
console.log(name.toLowerCase()) ;

// Capitalize string
var userName = prompt('What is your name?');
var newName = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
alert('Hello ' + newName);

// Replace a string
var name = 'John';
console.log(name.replace('John', 'Jane')) ;

// Number Increment and Decrement
var x = 10;
x ++; // x = x + 1
x --; // x = x - 1

// Number Increment and Decrement more than one time
var x = 10;
x += 2 // x = x + 2
x -= 2 // x = x - 2

// Creating function
function capitaliseName() {
    var name = prompt('What is your name?');
    var newName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    alert('Hello'+ newName);
}

capitaliseName();