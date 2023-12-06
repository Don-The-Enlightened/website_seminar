document.addEventListener("scroll", function() {
  var fadeInElements = document.querySelectorAll('.fade-in-image');

  fadeInElements.forEach(function(element) {
      var elementTopRelativeToDocument = element.getBoundingClientRect().top + window.scrollY;
      var viewportBottom = window.scrollY + window.innerHeight;

      if (elementTopRelativeToDocument < viewportBottom) {
          element.classList.add('show');
      }

      if (viewportBottom < elementTopRelativeToDocument) {
          element.classList.remove('show');
      }
  });
});

document.getElementById('dark-mode-toggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});


var mybutton = document.getElementById("toTop");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}
