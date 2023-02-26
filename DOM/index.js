/* Change h1 text to Good Bye */
document.querySelector('h1').innerHTML = 'Good Bye';

/* To select first Element child of first Element child (HTML/HEAD) */
document.firstElementChild.firstElementChild;

/* To select the body element (HTML/BODY)*/
document.firstElementChild.lastElementChild;

/* To select first element child of the body element (HTML/BODY/h1)*/
var titleHeading = document.firstElementChild.lastElementChild.firstElementChild
/* Change h1 text to Good Bye */
titleHeading.innerHTML = 'Good Bye';
titleHeading.style.color = 'red';

/* Select tickbox element */
document.querySelector('input[type="checkbox"]');
/* To send a click command to the tickbox */
document.querySelector('input[type="checkbox"]').click();

/* Select last element on the website list */
var thirdItem = document.querySelector('ul').lastElementChild;
thirdItem.innerHTML = 'Instagram page';

/* Select item from a array using getElementsByTagName*/
var secondItem = document.getElementsByTagName('li')[1];
secondItem.innerHTML = 'Facebook page';
secondItem.style.color = 'green';

/* Get number of elements using array*/
var numberOfItems = document.getElementsByTagName('li').length;
console.log(numberOfItems);

/* Get all elements by classname (returns an array)*/
var facebook = document.getElementsByClassName('facebook');

/* Get element by id (ID is unique hence only 1 item)*/
var button = document.getElementById('btn');
button.innerHTML = 'Click me';

/* Can also use querySelector to select by class and id*/
var button = document.querySelector('#btn');
var facebook = document.querySelector('.facebook');

/* Can also combine selectors */
var instagram = document.querySelector('#list .instagram-pg')
instagram.innerHTML = 'instagram';

/* Select multiple elements with same classname*/
var link = document.querySelectorAll('#list .link');

/* Change google link color to red */
var googleLink = document.querySelector('#list .google-pg')
googleLink.style.color = 'red';

/* Change background color of button */
var button = document.querySelector('#btn');
button.style.backgroundColor ='yellow';

/* Add class to existing class list. This can be used to change the select of the button by having another css for btn-2*/
document.querySelector("btn").classList.add("btn-2")
/* To remove class from classlist */
document.querySelector("btn").classList.remove("btn-2")
 
// Alternatively can use toggle like on/off
document.querySelector('btn').classList.toggle('btn-2')

// Use .innerHTML to modify the font
document.querySelector(".title").innerHTML = "<strong>Bold Good Bye</strong>"