const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const playBtn = document.getElementById("jsPlayButton");

function init() {
  playBtn.addEventListener("click", handlePlayClick);
  videoContainer.addEventListener("click", handlePlayClick);
}

function handlePlayClick() {
  if (videoPlayer.paused) {
    videoPlayer.play();
  } else {
    videoPlayer.pause();
  }
}

if (videoContainer) {
  init();
}
