var carouselSsandwich = $('.owl-carousel_sandwich');

carouselSsandwich.owlCarousel({
    loop:true,
    margin: 0,
    nav: false,
    dots: false,
    touchDrag: false,
    pullDrag: false,
    freeDrag: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 10000,
    smartSpeed: 1250
});

var carouselPancakes = $('.owl-carousel_pancakes');

carouselPancakes.owlCarousel({
    loop:true,
    margin: 30,
    nav: false,
    dots: false,
    items: 3,
    slideBy: 3,
    smartSpeed: 500
});

$('.sliderTrigger_left').click(function() {
    carouselPancakes.trigger('prev.owl.carousel');
});

$('.sliderTrigger_right').click(function() {
    carouselPancakes.trigger('next.owl.carousel');
});