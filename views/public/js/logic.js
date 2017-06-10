$(document).ready(function(){
	var animateNav = false;
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
				if($(this).scrollTop() > 1600 && $(this).scrollTop() < 2000){
					$('#skills-title').addClass('animated fadeInUp');
					$('.skill-cover').css({right: '100%'});
				}
				if($(this).scrollTop() > 2200){
					$('#portfolio-title').addClass('animated fadeInUp');
					portAnimation();
				}
				if($(this).scrollTop() > 0 && $(this).scrollTop() < 200){
					$('.navi').css({background: 'rgba(48,62,78, 0)'});
					$('.nav-item').css({
						fontSize: '15px', 
						color: '#fff'
					});

				}
				if($(this).scrollTop() > 250 ){
					$('.navi').css({background: 'rgba(48,62,78, 0.9)'});
					$('.nav-item').css({
						fontSize: '16px',
						color: '#fff'
					});
				}
			}
		}
	});

})