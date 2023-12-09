document.addEventListener('DOMContentLoaded', (event) => {

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


  // jQuery
  $(document).ready(function() {
    // Your jQuery code goes here

    // SLIDE IN AND UT IMAGE CREDIT
    $(".image-main").click(function(){
      $(".image-credit").slideToggle("slow");
    });

    // CHANGE COLOR
    $('p').click(function() {
        $(this).css('color', 'blue');
    });
    
    // SCROLL TO TOP BUTTON FADE IN/OUT
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
          $('#toTop').fadeIn();
      } else {
          $('#toTop').fadeOut();
      }
    });

    // SCROLL TO TOP FUNCTION
    $('#toTop').click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 400);
      return false;
    });

    // DARK MODE
    $('#dark-mode-toggle').click(function() {
      $('body').toggleClass('dark-mode');
    });

  });

});

