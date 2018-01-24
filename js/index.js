document.body.onload = function(){
 	setTimeout(function(){
 		if (!$('.preloader').hasClass('done')){
 			$('.preloader').addClass('done');
 		}
 	}, 300)};

$('.slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
	dots: true
});