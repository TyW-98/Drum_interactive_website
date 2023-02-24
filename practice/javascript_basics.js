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

// create function to calculate number of items
function calculateNumberOfItems(money) {
    var numberOfItems = Math.floor(money/1.5);
    var remainder = money % 1.5;
    console.log(numberOfItems + ' items with ' + remainder);
    return remainder;
}

var change = calculateNumberOfItems(10);
alert(change);

// Random number generator
var userInput = prompt("What is the teams name?");
var n = Math.round((Math.random() * 100),2) ;
alert(userInput + ' have a percentage channce of ' + n + '% to win the game');

// IF and ELSE statements
if (n > 55) {
    alert("Your team is gonna win the game with " + n + "%");
} else {
    alert("Your team only have " + n + "% chance to win the game");
}