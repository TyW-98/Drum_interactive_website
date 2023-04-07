const drumElements = document.querySelectorAll(".drum");
const audioKey = [
  { key: "w", audio: "snare.mp3" },
  { key: "a", audio: "tom-1.mp3" },
  { key: "s", audio: "tom-2.mp3" },
  { key: "d", audio: "kick-bass.mp3" },
  { key: "j", audio: "tom-3.mp3" },
  { key: "k", audio: "tom-4.mp3" },
  { key: "l", audio: "crash.mp3" },
];

for (var i = 0; i < drumElements.length; i++) {
  drumElements[i].addEventListener("click", function () {
    const audio = new Audio(
      "sounds/" + audioKey.find((sfx) => sfx.key === this.innerHTML).audio
    );
    animateBtn(this.innerHTML)
    audio.play();
  });
}

document.addEventListener("keydown", function (event) {
  console.log(event.key);

  const audio = new Audio(
    "sounds/" + audioKey.find((sfx) => sfx.key === event.key).audio
  );
  audio.play();
  animateBtn(event.key)
});

function animateBtn(keyPressed ) {
  const clickedBtn = document.querySelector("." + keyPressed);
  clickedBtn.classList.add("pressed");
  setTimeout(function () {
    clickedBtn.classList.remove("pressed");
  }, 100);
}
