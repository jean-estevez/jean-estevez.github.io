$(document).ready(function() {
  $('.carousel').slick({
      autoplay: true,
      speed: 1000,
      arrows: false,
      draggable: false,
      pauseOnFocus: false,
      pauseOnHover: false,
  });
});

var userScrollDistance = 0;

$(window).scroll(function() {
    var $scrollSave = $(this).scrollTop();
    if ($scrollSave - userScrollDistance >= 50) {
        var navHeight = $('.navbar').css('height');
        $('.navbar').animate({top: '-' + navHeight}, 150);
        userScrollDistance = $scrollSave;
    } else if (userScrollDistance - $scrollSave >= 50) {
        $('.navbar').animate({top: 0}, 150);
        userScrollDistance = $scrollSave;
    }
});
