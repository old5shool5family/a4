/* Прелоадер */
    $(window).on('load', function () {
    $preloader = $('.loaderArea'),
      $loader = $preloader.find('.loader');
    $loader.delay(1000).fadeOut('slow');
    $preloader.delay(1000).fadeOut('slow');
    });
/* Прелоадер конец */
/* Свернуть/развернуть меню сайта */
$(document).click( function(event){
	if( $(event.target).closest("nav").length ) 
	return;
	$("nav").slideUp("slow");
	event.stopPropagation();
});
$('.menu_icon').click( function() {
		$(this).siblings("nav").slideToggle("slow");
		return false;
	});
/* Свернуть/развернуть меню сайта */

$(document).ready(function() {
                /* Настройка анимации */
                $(".animate-zoomInUp").animated("zoomInUp");
        	    $(".animate-zoomInDown").animated("zoomInDown");
        	    $(".animate-fadeInLeft").animated("fadeInLeft");
        	    $(".animate-fadeInRight").animated("fadeInRight");
        	    $(".animate-rubberBand").animated("rubberBand");
        	    $(".animate-rollIn").animated("rollIn");
        	    $(".animate-hinge").animated("hinge");
        	    $(".animate-shake").animated("shake");
                /* Настройка анимации конец */
                /* Настройка colorbox */
                $(".colorbox").colorbox({transition:"fade", width:"80%", height:"80%"});
				$(".group").colorbox({rel:'group', slideshow:true, transition:"fade", width:"90%", height:"90%"});
				$(".youtube").colorbox({iframe:true, innerWidth:320, innerHeight:195});
				$(".vimeo").colorbox({iframe:true, innerWidth:250, innerHeight:200});
				$(".iframe").colorbox({iframe:true, width:"90%", height:"90%"});
				$(".inline").colorbox({inline:true, width:"90%"});
                /* Настройка colorbox конец */
                /* Карусель отзывов */
                    $(".owl-carousel").owlCarousel({
                        loop:true,
                        margin:20,
                        autoplay:true,
                        autoplayTimeout:1500,
                        autoplayHoverPause:true,
                        stagePadding: 20,
                        dots: true,
                        nav: false,
                        navText: ['<','>'],
                        responsiveClass:true,
                        responsive: {
                            0:{
                                items: 1,
                                dots: false,
                            },
                            399:{
                                items: 2,
                            },
                            750:{
                                items: 3,
                            },
                            970:{
                                items: 4,
                            }
                        }
                    });
                    
                /* Карусель отзывов */
            });