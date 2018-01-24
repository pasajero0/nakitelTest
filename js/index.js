document.body.onload = function(){
 	setTimeout(function(){
 		var preloader = document.getElementById('pagePreloader');
 		if (!preloader.classList.contains('.done')){
 			$('#pagePreloader').addClass("done");
 			console.log('done!');
 		}
 	}, 300)};

$('.slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
	dots: true
});