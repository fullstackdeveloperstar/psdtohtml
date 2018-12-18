// JavaScript Document
$(document).ready(function(e) {
    $('.prod_rev_nav li').click(function(e) {
        $('.prod_rev_nav li').not(this).removeClass('selt_rev');
		$(this).addClass('selt_rev');
    });
	$('.video_wrap').click(function(){
   document.getElementById('video').play();
});
	
	$('#baner-slide').slick({
		  dots: true,
		  infinite: true,
		  speed: 1000,
		  autoplay: true,
    	  autoplaySpeed: 2500,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		}); 
	
	
		$('#product-slider').slick({
		  dots: false,
		  infinite: true,
		  speed: 1000,
		  autoplay: true,
    	  autoplaySpeed: 2500,
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  
		  prevArrow: $('.prev-slide'),
		  nextArrow: $('.next-slide'),
		  
		  responsive: [			
			{
			  breakpoint: 991,
			  settings: {
		  		slidesToShow: 3,
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
		  		slidesToShow: 2,
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
		  		slidesToShow: 1,
			  }
			},
		  ]
		});
		
		
		$('#review-slider').slick({
		  dots: false,
		  infinite: true,
		  speed: 2000,
		  autoplay: true,
    	  autoplaySpeed: 10000,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  
		  prevArrow: $('.prev-review'),
		  nextArrow: $('.next-review'),
		  
		  responsive: [			
			{
			  breakpoint: 991,
			  settings: {
		  		slidesToShow: 3,
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
		  		slidesToShow: 2,
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
		  		slidesToShow: 1,
			  }
			},
		  ]
		});
		
		$('#brands').slick({
		  dots: false,
		  infinite: true,
		  speed: 1000,
		  autoplay: true,
    	  autoplaySpeed: 2500,
		  slidesToShow: 5,
		  slidesToScroll: 1,
		  
		  prevArrow: $('.prev-brand'),
		  nextArrow: $('.next-brand'),
		  
		  responsive: [			
			{
			  breakpoint: 991,
			  settings: {
		  		slidesToShow: 4,
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
		  		slidesToShow: 3,
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
		  		slidesToShow: 2,
			  }
			},
		  ]
		});
		      
	    $('#burger').click(function(e) {
			$('.nav-top').slideToggle();
		});
	
});

	$(window).resize(function() {
        if ($(this).width() > 991) {
           $(".nav-top").show();
        }
	});