window.addEventListener('scroll', function() {
    var element = document.querySelector('.overskrift-maria');
    var position = element.getBoundingClientRect();
    var offset = window.innerHeight * 0.7; // adjust as needed
  
    if (position.top < offset && position.bottom >= 0) {
      element.classList.add('slide-in');
    } else {
      element.classList.remove('slide-in');
    }
  });


