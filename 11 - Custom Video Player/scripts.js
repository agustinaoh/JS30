// Get the elements

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');

const progressBar = player.querySelector('.progress');
const filledBar = player.querySelector('.progress__filled');

const playToggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Build the functions

function togglePlay() {
  (video.paused) ? video.play() : video.pause();
};

function changeIcon() {
  video.paused ? playToggle.innerText= "►" : playToggle.innerText= "❚❚";
}

function speedUpdate() {
  console.log(video.playbackRate)
  video.playbackRate = ranges[1].value;
}

function advance() { console.log(video.currentTime) };

// Add the event listeners

playToggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('play', changeIcon);
video.addEventListener('pause', changeIcon);

ranges.forEach(selector => {
  selector.addEventListener('change', speedUpdate);
});

ranges.forEach(selector => {
  selector.addEventListener('mousemove', speedUpdate);
});

// player.addEventListener('keyup', togglePlay => {
//   if (e.code == "Space") {
//     togglePlay();
//   }
// });