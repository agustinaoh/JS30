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
  // console.log(video.playbackRate, this.name, this.value);
  video[this.name] = this.value;
}

function skip() {
  // console.log(video.currentTime, this.dataset.skip);
  video.currentTime += parseInt(this.dataset.skip);
};

function progressBarUpdate(){
  const percentage = Math.floor(video.currentTime / video.duration * 100 ) + "%";
  filledBar.style.setProperty('flex-basis', percentage);
};


// Add the event listeners

playToggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('play', changeIcon);
video.addEventListener('pause', changeIcon);
video.addEventListener('change', progressBarUpdate);


ranges.forEach(selector => {
  selector.addEventListener('change', speedUpdate);
});

ranges.forEach(selector => {
  selector.addEventListener('mousemove', speedUpdate);
});

skipButtons.forEach(button => {
  button.addEventListener('click', skip)
});


// player.addEventListener('keyup', togglePlay => {
//   if (e.code == "Space") {
//     togglePlay();
//   }
// });