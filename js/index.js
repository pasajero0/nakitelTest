document.body.onload = function(){
 	setTimeout(function(){
 		if (!$('#pagePreloader').hasClass('done')){
 			$('#pagePreloader').addClass('done');
 		}
 	}, 300)};

$('.slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 1000,
	dots: true
});