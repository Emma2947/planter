window.addEventListener('scroll', function() {
    var element = document.querySelector('.overskrift-maria');
    var position = element.getBoundingClientRect();
    var offset = window.innerHeight * 0.7; // adjust as needed
  
    if (position.top < offset) {
      element.classList.add('slide-in');
    }
  });

  window.addEventListener('scroll', function() {
    var element = document.querySelector('.citat-maria');
    var position = element.getBoundingClientRect();
    var offset = window.innerHeight * 0.7; // adjust as needed
  
    if (position.top < offset) {
      element.classList.add('slide-in');
    }
  });

  window.addEventListener('scroll', function() {
    var element = document.querySelector('.brødtekst-maria');
    var position = element.getBoundingClientRect();
    var offset = window.innerHeight * 0.7; // adjust as needed
  
    if (position.top < offset) {
      element.classList.add('slide-in');
    }
  });

