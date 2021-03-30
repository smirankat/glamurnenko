
$(document).ready(function(){

	let $menu = $(".header");

	$(window).scroll(function(){
		if ( $(this).scrollTop() > 500 && $menu.hasClass("default") ){
			$menu.removeClass("default").addClass("fixed");
		} else if($(this).scrollTop() <= 500 && $menu.hasClass("fixed")) {
			$menu.removeClass("fixed").addClass("default");
		}
	});
});

$(document).ready(function() {
	$('.navbar-toggler').click(function() {
		$('.header').toggleClass('header-size');
	})
})

// modal
$(document).ready(function($) {
	$('.popup-open').click(function() {
		$('.popup-fade').fadeIn();
		return false;
	});

	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});

	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});

	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();
		}
	});
});

// scroll up
$(document).ready(function() {
	let button = $('#button-up');
// 	$(window).scroll (function () {
// 	  if ($(this).scrollTop () > 300) {
// 		button.fadeIn();
// 	  } else {
// 		button.fadeOut();
// 	  }
//   });
  button.on('click', function(){
  $('body, html').animate({
  scrollTop: 0
  }, 800);
  return false;
  });
  });