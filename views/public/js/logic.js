$(document).ready(function(){
	var portAnimation = function(){
			$('div.port-item').delay(500).animate({
				opacity: 1
			}, 1500);
			$('div#port0').delay(1000).animate({
				opacity: 1
			}, 1500);
			$('div#port1').delay(1500).animate({
				opacity: 1
			}, 1500);
			$('div#port2').delay(2000).animate({
				opacity: 1
			}, 1500);
			$('div#port3').delay(2500).animate({
				opacity: 1
			}, 1500);
			$('div#port4').delay(3000).animate({
				opacity: 1
			}, 1500);
			$('div#port5').delay(3500).animate({
				opacity: 1
			}, 1500);
			$('div#port6').delay(4000).animate({
				opacity: 1
			}, 1500);
			$('div#port7').delay(4500).animate({
				opacity: 1
			}, 1500);
	};
	$(window).scroll(function(){
		if($(this).width() < 2000){
			if($(this).height() < 1000){
				if($(this).scrollTop() > 800 && $(this).scrollTop() < 1400){
					$('#about-me-title').addClass('animated fadeInUp');
				}
				if($(this).scrollTop() > 1600){
					$('#portfolio-title').addClass('animated fadeInUp');
					portAnimation();
				}
			}
		}
	});


})