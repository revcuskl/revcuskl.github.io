"use strict";
var opts = {
  infinite: !0,
  autoplay: !0,
  autoplaySpeed: 5e3,
  arrows: !1,
  dots: !0
};
$(".irreplaceable-slider").slick(opts),
  $(".testimonials-slider__wrap").slick({ infinite: !0, arrows: !1, dots: !0 }),
  $(".slider-prev").on("click", function() {
    $(".testimonials-slider__wrap").slick("slickPrev");
  }),
  $(".slider-next").on("click", function() {
    $(".testimonials-slider__wrap").slick("slickNext");
  });
var ops = { countdown: !0, language: "it-it" };
$(".timer-wrap1").FlipClock(1823, ops),
  $(".timer-wrap2").FlipClock(1823, ops),
  $(document).on("click", 'a[href^="#"]', function(i) {
    var t = $(this).attr("href"),
      e = $(t);
    if (0 !== e.length) {
      i.preventDefault();
      var r = e.offset().top;
      $("body, html").animate({ scrollTop: r });
    }
  });
