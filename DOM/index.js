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


