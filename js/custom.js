/* JS */
$(function () {
  //    sticky navbar
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    var sticky = $(".navbar");
    if (scrolling >= 20) {
      sticky.addClass("navbg");
    } else {
      sticky.removeClass("navbg");
    }
  });
  // toggle navbar button //
  $(".navbar-toggler").on("click", function () {
    $(".navbar-brand").addClass("navbar-brand-opacity");
  });
  $(".close-btn").on("click", function () {
    $(".navbar-brand").removeClass("navbar-brand-opacity");
  });
});
