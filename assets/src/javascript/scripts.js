;(function ($) {
	"use strict";
			$(function () {
		$('.slider__box').slick({
			dots: true
		});
	});
	
		$(function () {
		$('.team-slider').slick({
			dots: true
		});
	});

	
	
	

function initMap() {
		var map;
		var mapBox = $('#map')[0];

		var myCenter = {
			lat: 46.584328,
			lng: 30.7811913
		};
		map = new google.maps.Map(mapBox, {
			zoom: 7,
			center: {
				lat: 46.4598865,
				lng: 30.5717046
			},
			disableDefaultUI: true
		});
		var marker = new google.maps.Marker({
			position: myCenter,
			
			icon: {
				url: 'https://beetroot.se/wp-content/uploads/2016/04/cropped-favicon-150x150.png?x17685',
				scaledSize: new google.maps.Size(76, 76)
			},
			map: map,
			title: 'Home'
		});



	}


	$(window).on('load', function () {
		initMap();
	});
	$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		
		event.preventDefault();


		var id  = $(this).attr('href'),


			top = $(id).offset().top;
		

		$('body,html').animate({scrollTop: top}, 1500);
	});
});
	

	$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {       
        $('#return-to-top').fadeIn(200);    
    } else {
        $('#return-to-top').fadeOut(200);       }
});
$('#return-to-top').click(function() {      
    $('body,html').animate({
        scrollTop : 0                       
    }, 500);
});
	
	
	
	})(jQuery);