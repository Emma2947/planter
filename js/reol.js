// overskrift slider ind
window.addEventListener('scroll', function() {
    var element = document.querySelector('.overskrift-reol');
    var position = element.getBoundingClientRect();
    var offset = window.innerHeight * 0.9; // adjust as needed
  
    if (position.top < offset && position.bottom >= 0) {
      element.classList.add('slide-in');
    } else {
      element.classList.remove('slide-in');
    }
  });


// Funktionen, der viser popup-vinduet med den valgte video
function showVideo(videoId) {
    
    // Vis popup-vinduet
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
    
    // Find den valgte video
    const videoSrc = `/video/plante${videoId}.mp4`;

 // Opdater iframe-kilden til at vise den valgte video
 const videoPlayer = document.getElementById('video-player');
 videoPlayer.setAttribute('src', videoSrc);

  const videoWidth = videoPlayer.videoWidth;
  const videoHeight = videoPlayer.videoHeight;
  videoPlayer.style.width = videoWidth + 'px';
  videoPlayer.style.height = videoHeight + 'px';

}

var closeBtn = document.getElementsByClassName("close")[0];
function closePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = "none";
}
