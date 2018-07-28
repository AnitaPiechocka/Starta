
	$(document).ready(function(){
				$(window).bind('scroll',function(e){
			   		parallaxScroll();
			   	});
			   	
			   	
			   	function parallaxScroll(){
			   		var scrolledY = $(window).scrollTop();
					$('.bgWrapper').css('background-position','center -'+((scrolledY*0.1))+'px');
		
			   	} 	
			});
	$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox({alwaysShowClose: true});
});
	 baguetteBox.run('.tz-gallery');
