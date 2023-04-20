// overskrift slider ind hver gang at sectionen vises på siden
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


//popup-vinduet vises med den valgte video
function showVideo(videoId) {
    
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
    
    // Den rigtige video findes automatisk
    const videoSrc = `/video/plante${videoId}.mp4`;

 // Den valgte video vises
 const videoPlayer = document.getElementById('video-player');
 videoPlayer.setAttribute('src', videoSrc);

}

// Videoen lukkes ved at trykke på luk-knappen
var closeBtn = document.getElementsByClassName("close")[0];
function closePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = "none";
}
