window.addEventListener('scroll', function() {
    var element = document.querySelector('.overskrift-reol');
    var position = element.getBoundingClientRect();
    var offset = window.innerHeight * 0.7; // adjust as needed
  
    if (position.top < offset) {
      element.classList.add('slide-in');
    }
  });

// Find popup-elementerne og knappen for at lukke popup'en
const popup = document.getElementById('popup');
const popupContent = document.querySelector('.popup-content');
const closeBtn = document.querySelector('.close');

// Funktionen, der viser popup-vinduet med den valgte video
function showVideo(videoId) {

    console.log('Show video button clicked');


    
    // Vis popup-vinduet
    const popup = document.getElementById('popup');
    popup.style.display = 'block';

    // Find den valgte video
    const videoSrc = `/video/plante1.mp4`;

 // Opdater iframe-kilden til at vise den valgte video
 const videoPlayer = document.getElementById('video-player');
 videoPlayer.setAttribute('src', videoSrc);

  const videoWidth = videoPlayer.videoWidth;
  const videoHeight = videoPlayer.videoHeight;
  videoPlayer.style.width = videoWidth + 'px';
  videoPlayer.style.height = videoHeight + 'px';


}