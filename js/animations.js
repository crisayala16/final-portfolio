$(document).ready(function(){
	var animateNav = false;
	// var portAnimation = function(){
	// 		$('div.port-item').delay(500).animate({
	// 			opacity: 1
	// 		}, 1500);
	// 		$('div#port0').delay(1000).animate({
	// 			opacity: 1
	// 		}, 1500);
	// 		$('div#port1').delay(1500).animate({
	// 			opacity: 1
	// 		}, 1500);
	// 		$('div#port2').delay(2000).animate({
	// 			opacity: 1
	// 		}, 1500);
	// 		$('div#port3').delay(2500).animate({
	// 			opacity: 1
	// 		}, 1500);
	// 		$('div#port4').delay(3000).animate({
	// 			opacity: 1
	// 		}, 1500);
	// 		$('div#port5').delay(3500).animate({
	// 			opacity: 1
	// 		}, 1500);
	// 		$('div#port6').delay(4000).animate({
	// 			opacity: 1
	// 		}, 1500);
	// 		$('div#port7').delay(4500).animate({
	// 			opacity: 1
	// 		}, 1500);
	// };
	var lastST = 0;
	$(window).scroll(function(){
		if($(this).width() < 2000){
			if($(this).height() < 1000){
				var st = $(this).scrollTop();
				// if(st > 800 && st < 1400){				
				// 	$('#about-me-title').css({fontSize: '60px'});
				// }
				// if(st > 1600 && st < 2000){
				// 	$('#skills-title').css({fontSize: '60px'});
				// 	$('.skill-cover').css({right: '100%'});
				// }
				// if(st > 2600 && st < 3200){
				// 	$('#portfolio-title').css({fontSize: '60px'});
				// 	portAnimation();
				// }
				// if(st > 3600 && st < 4000){
				// 	$('#contact-title').css({fontSize: '60px'});
				// 	$('#submit-btn').css({
				// 		left: '0',
				// 		opacity: '1'
				// 	});
				// }
				if(st > 0 && st < 200){
					$('.navi').css({background: 'rgba(48,62,78, 0)'});
					$('.nav-item').css({
						fontSize: '15px', 
						color: '#fff'
					});

				}
				if(st > 250 ){
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