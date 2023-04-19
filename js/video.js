    // Opret en variabel til at indeholde video-id'et
    var videoId = 'By-64CDf6Xk';

    // Opret en variabel til at indeholde afspilleren
    var player;
    
    // Funktion til at oprette afspilleren
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
    
    // Funktion til at starte afspilleren, når den er klar
    function onPlayerReady(event) {
        event.target.playVideo();
    }

    const section = document.getElementById("video");
const heading = section.querySelector("h1");

function handleIntersection(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      heading.classList.remove("slide-in-out");
      void heading.offsetWidth; // Trigger reflow to restart animation
      heading.classList.add("slide-in-out");
    }
  });
}

const observer = new IntersectionObserver(handleIntersection);
observer.observe(section);


  