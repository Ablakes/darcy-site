

/* Photo carousel */

// $('.carousel-main').flickity({
// 	freeScroll: true,
// 	wrapAround: true
// });

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

$('.js--nav-icon, .js--main-nav a, .logo-black').click(function(element){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        //Gets the class name of the element that triggered the event
        var clicked = element.target.className;

        //Exists the function if the menu is closed AND the logo-black element (logo image) was clicked
        if (icon.hasClass('ion-drag') && clicked == 'logo-black')
            return;

        //Opens and closes the menu
        if ($(window).width() < 650){
            nav.slideToggle(200);
        }

        //Changes icon states of the menu button
        if (icon.hasClass('ion-drag')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-drag');
        } else {
            icon.addClass('ion-drag');
            icon.removeClass('ion-close-round');
        }
    });


    $(window).resize(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        if ($(window).width() > 651){
            nav.css("display", "flex");
            nav.css("position", "fixed");
            icon.addClass('ion-close-round');
            icon.removeClass('ion-drag');
        } else {
            nav.css("display", "none");
            icon.addClass('ion-drag');
            icon.removeClass('ion-close-round');
        }

    });

});	