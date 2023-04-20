    //video-id'et fra youtube
    var videoId = 'By-64CDf6Xk';

  
    var player; 
    //afspilleren oprettes
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('video-container', {
            height: '100%',
            width: '100%',
            videoId: videoId,
            playerVars: {
                autoplay: 1,
                controls: 1,
                showinfo: 0,
                modestbranding: 1,
                loop: 1,
                playlist: videoId,
                mute: 1,
                iv_load_policy: 3,
                rel: 0
            },
            events: {
                onReady: onPlayerReady
            }
        });
    }
    
    //Afspilleren starter, når den er klar
    function onPlayerReady(event) {
        event.target.playVideo();
    }

// overskrift slider ind hver gang at sectionen vises på siden
window.addEventListener('scroll', function() {
  var element = document.querySelector('.overskrift-video');
  var position = element.getBoundingClientRect();
  var offset = window.innerHeight * 15; // adjust as needed

  if (position.top < offset && position.bottom >= 0) {
    element.classList.add('slide-in');
  } else {
    element.classList.remove('slide-in');
  }
});


  