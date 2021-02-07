

// navbar Sticky
$(window).on('scroll',function() {
	var stickytop = $('.nav-style');
	var stickytopslide = $('.stick-top ');
	
	if ($(this).scrollTop() > 1){  
		stickytop.addClass("sticky-on");
		stickytop.find(".logo").attr('src',stickytop.find('.logo').data('sticky-logo'));
	}
	else {
		stickytop.removeClass("sticky-on");
		stickytop.find(".logo").attr('src',stickytop.find('.logo').data('default-logo'));
	}
	
	if ($(this).scrollTop() > 180){  
		stickytopslide.find(".nav-style").addClass("sticky-on");
		stickytopslide.find(".logo").attr('src',stickytopslide.find('.logo ').data('sticky-logo'));
	}
	else{
		stickytopslide.find(".nav-style").removeClass("sticky-on");
		stickytopslide.find(".logo ").attr('src',stickytopslide.find('.logo').data('default-logo'));
	}
});



// navBar collapse X
$('.navbar-toggler').on('click', function() {
	$(this).toggleClass('show');
});
$(".navbar-nav a").on('click', function() {
    $(".navbar-collapse, .navbar-toggler").removeClass("show");
});

 //smooth scroll
 
 $('a[href*="#"]')
 .not('[href="#"]')
 .not('[href="#0"]')
 .click(function(event) {
   // On-page links
   if (
	 location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	 && 
	 location.hostname == this.hostname
   ) {
	 
	 var target = $(this.hash);
	 target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	 
	 if (target.length) {
	   
	   event.preventDefault();
	   $('html, body').animate({
		 scrollTop: target.offset().top
	   }, 1500, function() {
		 
		 var $target = $(target);
		 $target.focus();
		 if ($target.is(":focus")) { 
		   return false;
		 } else {
		   $target.attr('tabindex','-1'); 
		   $target.focus(); 
		 };
	   });
	 }
   }
 });



