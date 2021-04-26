// Get the elements

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');

const progressBar = player.querySelector('.progress');
const filledBar = player.querySelector('.progress__filled');

const playToggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Build the functions

function play() { video.play() };
function pause() { video.pause() };
function advance() { console.log(video.currentTime) };

// Add the event listeners