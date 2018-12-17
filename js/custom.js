
// Press release news, show content on click

jQuery(".news-header").on("click",function(){

	var isOpened = jQuery(this).parent().find(".news-content").is(":visible");

	if (isOpened) {


		jQuery(this).parent().find(".news-content").slideUp();
		jQuery(this).find(".show-more").removeClass("rotated");
		jQuery(this).find(".news-title").removeClass("active");
	}

	else {
		if ( jQuery(window).width() > 784 ) {

			jQuery(this).parent().find(".news-content").slideDown({
			  start: function () {
			    jQuery(this).css({
			      display: "flex"
			    })
			  }
			});

		}

		else {
			jQuery(this).parent().find(".news-content").slideDown();
		}
		

		jQuery(this).find(".show-more").addClass("rotated");
		jQuery(this).find(".news-title").addClass("active");

	}
	

})