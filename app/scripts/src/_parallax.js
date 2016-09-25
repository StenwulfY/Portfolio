$(window).scroll(function(e) {
    parallax();
});

function parallax() {
    var scrolled = $(window).scrollTop();
    $('.hero').css('top', -(scrolled * 0.0415) + 'rem');
    $('.hero > p').css('top', -(scrolled * -0.005) + 'rem');
    $('.hero > p').css('opacity', 1 - (scrolled * .00175));
    $('.hero > h3').css('top', -(scrolled * -0.005) + 'rem');
    $('.hero > h3').css('opacity', 1 - (scrolled * .00175));
}
