
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


function magnify(imgID, zoom) {

  var img, glass, w, h, bw;
  img = document.getElementById(imgID);

  /* Create magnifier glass: */
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");

  /* Insert magnifier glass: */
  img.parentElement.insertBefore(glass, img);

  /* Set background properties for the magnifier glass: */
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;

  /* Execute a function when someone moves the magnifier glass over the image: */




  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);

  /*and also for touch screens:*/
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);

  function moveMagnifier(e) {
    var pos, x, y;
    /* Prevent any other actions that may occur when moving over the image */
    e.preventDefault();
    /* Get the cursor's x and y positions: */
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    /* Prevent the magnifier glass from being positioned outside the image: */
    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
    /* Set the position of the magnifier glass: */
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    /* Display what the magnifier glass "sees": */
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }

  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /* Get the x and y positions of the image: */
    a = img.getBoundingClientRect();
    /* Calculate the cursor's x and y coordinates, relative to the image: */
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /* Consider any page scrolling: */
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}

if ($(".main-img").length) {
  magnify("myimage", 1.5);
}




$(".main-img").mouseenter(function(){
	$(".img-magnifier-glass").fadeIn()
});



$(".main-img").mouseleave(function(){
	$(".img-magnifier-glass").hide();
});





$("#more-grid .mini-images img").on("click",function(){
	var src = $(this).attr("src");
	$("#myimage").attr("src", src);
	$(".img-magnifier-glass").remove();
	magnify("myimage", 1.5);
})




$("#cartminus").on("click",function(){
	var current = parseInt($("#cartnumber").text())
	if (current == 1) {
		current = 1;
	}
	else {
		$("#cartnumber").text(current-1);
	}
})

$("#cartplus").on("click",function(){
	var current = parseInt($("#cartnumber").text())
	var max = parseInt($("#stocknumber").text())

	if (current == max) {
		current = max;
	}
	else {
		$("#cartnumber").text(current+1);
	}
})




//  MAIN PAGE - CLICK PLAY ON VIDEO


$("#videos-list .playvideo").on("click",function(ev) {

  $(this).fadeOut();
  $(this).parent().find(".thumb").fadeOut();
  $(this).parent().find(".closevideo").fadeIn(); 
  $(this).parent().addClass("playing");


})


$(".closevideo").on("click",function(){
  $(this).fadeOut();
  $(this).parent().find(".thumb").fadeOut();
  $(this).parent().removeClass("playing");
    
})


