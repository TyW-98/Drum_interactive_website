const drumElements = document.querySelectorAll(".drum");
const tom1 = new Audio("sounds/tom-1.mp3")

for (var i = 0; i < drumElements.length; i++) {
    drumElements[i].addEventListener("click", function () {
        tom1.play();
    });
}
