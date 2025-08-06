document.addEventListener("DOMContentLoaded", function () {
  const playImage = document.getElementById("play-image");
  const bgMusic = document.getElementById("bg-music");

  if (playImage && bgMusic) {
    playImage.addEventListener("click", function () {
      bgMusic.play();
    });
  }
});
