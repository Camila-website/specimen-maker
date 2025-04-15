
const bgMusic = new Audio("music/background-music.mp3");
bgMusic.loop = true;
bgMusic.volume = 0.5;


const bubbleSound = new Audio("music/bubble.mp3");
bubbleSound.volume = 0.1;


document.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
  }
  bubbleSound.currentTime = 0;
  bubbleSound.play();
}, { once: false });


document.addEventListener("DOMContentLoaded", () => {
  const muteButton = document.getElementById("mute-button");

  muteButton.addEventListener("click", () => {
    bgMusic.muted = !bgMusic.muted;
    muteButton.textContent = bgMusic.muted ? "🔇" : "🔊";
  });
});
