// Audio First Slide

// End Audio First Slide


//Car categories

// var k = $(".card");
// $("#top").on("mousemove", function (d) {
//     var s = -($(window).innerWidth() / 2 - d.pageX) / 30,
//         c = ($(window).innerHeight() / 2 - d.pageY) / 10;
//     k.attr("style", "transform: rotateY(" + s + "deg) rotateX(" + c + "deg);-webkit-transform: rotateY(" + s + "deg) rotateX(" + c + "deg);-moz-transform: rotateY(" + s + "deg) rotateX(" + c + "deg)")
// })

// var b = $(".card2");
// $("#top2").on("mousemove", function (t) {
//     var e = -($(window).innerWidth() / 2 - t.pageX) / 30,
//         n = ($(window).innerHeight() / 2 - t.pageY) / 10;
//     b.attr("style", "transform: rotateY(" + e + "deg) rotateX(" + n + "deg);-webkit-transform: rotateY(" + e + "deg) rotateX(" + n + "deg);-moz-transform: rotateY(" + e + "deg) rotateX(" + n + "deg)")
// })


// var w = $(".card3");
// $("#top3").on("mousemove", function (y) {
//     var u = -($(window).innerWidth() / 2 - y.pageX) / 30,
//         p = ($(window).innerHeight() / 2 - y.pageY) / 10;
//     w.attr("style", "transform: rotateY(" + u + "deg) rotateX(" + p + "deg);-webkit-transform: rotateY(" + u + "deg) rotateX(" + p + "deg);-moz-transform: rotateY(" + u + "deg) rotateX(" + p + "deg)")
// })


// var a = $(".card4");
// $("#top4").on("mousemove", function (s) {
//     var m = -($(window).innerWidth() / 2 - s.pageX) / 30,
//         l = ($(window).innerHeight() / 2 - s.pageY) / 10;
//     a.attr("style", "transform: rotateY(" + m + "deg) rotateX(" + l + "deg);-webkit-transform: rotateY(" + m + "deg) rotateX(" + l + "deg);-moz-transform: rotateY(" + m + "deg) rotateX(" + l + "deg)")
// })
//End Car


    $(document).ready(function() {
    $(document).on("scroll", onScroll);
  
    //smoothscroll
    $(".menusticky a").on("click", function(e) {
      e.preventDefault();
      $(document).off("scroll");
      console.log("click");
  
      $(".menusticky a").each(function() {
        $(this).removeClass("active");
      });
      $(this).addClass("active");
  
      var target = this.hash,
          menu = target;
      $target = $(target);
      $("html, body")
        .stop()
        .animate(
        {
          scrollTop: $target.offset().top + 2
        },
        500,
        "swing",
        function() {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
        }
      );
    });
  });
  
  function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $(".menusticky a").each(function() {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (
        refElement.position().top <= scrollPos &&
        refElement.position().top + refElement.height() > scrollPos
      ) {
        $(".menusticky a").removeClass("active");
        currLink.addClass("active");
      } else {
        currLink.removeClass("active");
      }
    });
  }

