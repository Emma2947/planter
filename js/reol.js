// Wrap every letter in a span
var textWrapper = document.querySelector('.overskrift-reol');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.overskrift-reol .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.overskrift-reol .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });

//video
  const imageContainer = document.querySelector('.image-container');
const videoContainer = imageContainer.querySelector('.video-container');
const video = videoContainer.querySelector('video');
const closeBtn = videoContainer.querySelector('.close-btn');

imageContainer.addEventListener('click', () => {
  videoContainer.style.display = 'block';
  video.play();
});

closeBtn.addEventListener('click', () => {
  videoContainer.style.display = 'none';
  video.pause();
});
