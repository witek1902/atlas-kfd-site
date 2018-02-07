$(window).bind('scroll', function () {
  if ($(window).scrollTop() > 650) {
    $('#main-nav').addClass('navbar-fixed-top');
  } else {
    $('#main-nav').removeClass('navbar-fixed-top');
  }
});

$(document).ready(function() {
  $('#top').parallax("50%", 0.4);
  $('#testimonial').parallax("50%", 0.4);
  $('#download').parallax("50%", 0.4);

  $(".owl-carousel").owlCarousel({
    autoPlay: 3000,
    items : 4,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,3]
  });

  $("a[data-rel^='prettyPhoto']").prettyPhoto({social_tools:false});

  $(".navigation a, .btn:not(.external)").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(section).offset().top - 30
    });
  });
});