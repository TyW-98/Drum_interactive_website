const drumElements = document.querySelectorAll(".drum");

for (var i = 0; i < drumElements.length; i++) {
    drumElements[i].addEventListener("click", function () {
        alert("clicked");
    });
}
