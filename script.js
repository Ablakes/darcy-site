

/* Photo carousel */

$('.carousel-main').flickity({
	freeScroll: true,
	wrapAround: true
});

// // 2nd carousel, navigation
// $('.carousel-nav').flickity({
//   asNavFor: '.carousel-main',
//   contain: true,
//   pageDots: false,
//   freeScroll: true,
//   wrapAround: true
// });

	
$(document).ready(function() {
	/* Scroll on buttons */
	$('.scroll-to-demo').click(function () {
		$('html, body').animate({scrollTop: $('.js--section-demo').offset().top}, 400); 
	});

	$('.scroll-to-photo').click(function () {
		$('html, body').animate({scrollTop: $('.js--section-photo').offset().top}, 400); 
	});

	$('.scroll-to-home').click(function () {
		$('html, body').animate({scrollTop: $('.js--section-home').offset().top}, 400); 
	});

	$('.scroll-to-bio').click(function () {
		$('html, body').animate({scrollTop: $('.js--section-bio').offset().top}, 400); 
	});

	$('.scroll-to-contact').click(function () {
		$('html, body').animate({scrollTop: $('.js--section-contact').offset().top}, 400); 
	});

});	