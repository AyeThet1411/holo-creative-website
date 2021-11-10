//preloader
$(window).on("load", function () {
  $("#status").fadeOut(1000);
  $("#preloader").delay(1100).fadeOut(1000);
});
//tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


//beach page carousel
$(document).ready(function () {
 var owl= $("#beach-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items:2,
      },
      1000: {
        items: 4,
      },
    },
  });
  $( '.owl-filter-bar' ).on( 'click', '.item', function() {
    var $item = $(this);
    var filter = $item.data( 'owl-filter' )
    owl.owlcarousel2_filter( filter );
  })
 });
//Counter Up
$(document).ready(function () {
  $(".counter-value").counterUp({
    delay: 10,
    time: 1000,
  });
});
$(document).ready(function () {
  $(".route").mouseenter(function () {
    $(".fa-route").addClass("animate-route");
    $(this).addClass("change-color");
  });
  $(".route").mouseleave(function () {
    $(".fa-route").removeClass("animate-route");
    $(this).removeClass("change-color");
  });
  $(".smile").mouseenter(function () {
    $(".fa-smile").addClass("animate-smile");
    $(this).addClass("change-color");
  });
  $(".smile").mouseleave(function () {
    $(".fa-smile").removeClass("animate-smile");
    $(this).removeClass("change-color");
  });
  $(".user").mouseenter(function () {
    $(".fa-users").addClass("animate-users");
    $(this).addClass("change-color");
  });
  $(".user").mouseleave(function () {
    $(".fa-users").removeClass("animate-users");
    $(this).removeClass("change-color");
  });
  $(".global").mouseenter(function () {
    $(".fa-globe").addClass("animate-global");
    $(this).addClass("change-color");
  });
  $(".global").mouseleave(function () {
    $(".fa-globe").removeClass("animate-global");
    $(this).removeClass("change-color");
  });
});
// Responsive Tab to client Section 
$(document).ready(function () {
  $("#client-tabs").responsiveTabs({
    animation: "slide",
  });
});
//  scroll waypoint progress bar
$(document).ready(function(){
  $('#client-tabs').waypoint(function(){
    // each=nothing action like click
    $(".progress-bar").each(function () {
      $(this).animate(
        {
          width: $(this).attr("aria-valuenow") + "%",
        },
        3000
      );
      $('.progress span').animate({left:$(this).attr("aria-valuenow") + "%",},3000)
    });
    
    // work only one time
    this.destroy();
  },
  {
    offset: "bottom-in-view",
  }
  );
})
//submit alert
$(document).ready(function(){
  $('.alert').fadeOut();
  $('.btn-submit').on("click",function(){
    $('.alert.alert-success').alert().fadeIn();
  })
});
//back to top
const $backTop = $(".back-to-top");
const isHidden = "is-hidden";
$(window).on("scroll", function() {
  const $this = $(this);
  if ($this.scrollTop() + $this.height() == $(document).height()) {
    $backTop.removeClass(isHidden);
  } else {
    $backTop.addClass(isHidden);
  }
});
$(document).ready(function(){
  $(".back-to-top ").click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 4500)
    return false;
  })
})
//nav section
$(document).ready(function () {
  $(window).scroll(function () {
    // for show
    if ($(window).scrollTop() > 50) {
      $("nav").addClass("white-nav-top");
    } else {
      //for hide
      $("nav").removeClass("white-nav-top");
    }
  });
  $("nav ul.text-list li a[href*='#']").on('click', function(e) {
    // prevent default anchor click behavior
    e.preventDefault();
    // store hash
    var hash = this.hash;
    // animate
    $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 2000, function(){
        // (default click behaviour)
        window.location.hash = hash;
      });
  });
});
//Animation Scroll Effects
$(function() {
  
  var html = $('html');
  // On Screen
  $.fn.isOnScreen = function() {
    var elementTop = $(this).offset().top,
      elementBottom = elementTop + $(this).outerHeight(),
      viewportTop = $(window).scrollTop(),
      viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };
  function detection() {
    for (var i = 0; i < items.length; i++) {
      var el = $(items[i]);

      if (el.isOnScreen()) {
        el.addClass("in-view");
      } else {
        el.removeClass("in-view");
      }
    }
  }
  var items = document.querySelectorAll(
    "*[data-animate-in], *[data-detect-viewport]"
  ),
    waiting = false,
    w = $(window);

  $(window).on("resize scroll", function() {
    if (waiting) {
      return;
    }
    waiting = true;
    detection();

    setTimeout(function() {
      waiting = false;
    }, 100);
  });
  $(document).ready(function() {
    setTimeout(function() {
      detection();
    }, 500);

    for (var i = 0; i < items.length; i++) {
      var d = 0,
        el = $(items[i]);
      if (items[i].getAttribute("data-animate-in-delay")) {
        d = items[i].getAttribute("data-animate-in-delay") / 1000 + "s";
      } else {
        d = 0;
      }
      el.css("transition-delay", d);
    }
  });
});
