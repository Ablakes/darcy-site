var hero = document.querySelector('.hero');
var title = document.querySelector('.main-banner');

window.onload = function () {
    hero.style.animation = "moveInRight 1s ease-out";
    title.style.animation = "moveInLeft 1s ease-out";
    setTimeout(function () {
        title.style.opacity = '1';
        hero.style.opacity = '1';
    }, 1000);
};


$(document).ready(function () {
    /* Scroll on buttons */
    $('.scroll-to-demo').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-demo').offset().top
        }, 400);
    });

    $('.scroll-to-photo').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-photo').offset().top
        }, 400);
    });

    $('.scroll-to-home').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-home').offset().top
        }, 400);
    });

    $('.scroll-to-bio').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-bio').offset().top
        }, 400);
    });

    $('.scroll-to-contact').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-contact').offset().top
        }, 400);
    });

    $('.read-more-trigger').click(function () {
        $('.read-more-trigger').toggleClass("lower-button");
        $('.dots').toggleClass("hide-dots");
        $('.read-more-text').toggleClass("hide-dots");
        $('.read-less-text').toggleClass("show-text");
        $('.read-more-wrap').toggleClass("lower-read-more");
        $('.js--section-bio').toggleClass("extend-bio");
    });

    $('.js--nav-icon, .js--main-nav a, .logo-black').click(function (element) {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        //Gets the class name of the element that triggered the event
        var clicked = element.target.className;

        //Exists the function if the menu is closed AND the logo-black element (logo image) was clicked
        if (icon.hasClass('.fa-bars') && clicked == 'logo-black')
            return;

        //Opens and closes the menu
        if ($(window).width() < 650) {
            nav.slideToggle(200);
        }

        //Changes icon states of the menu button
        if (icon.hasClass('fa-bars')) {
            icon.addClass('fa-times');
            icon.removeClass('fa-bars');
        } else {
            icon.addClass('fa-bars');
            icon.removeClass('fa-times');
        }
    });


    $(window).resize(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        if ($(window).width() > 651) {
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