$(document).ready(function(){

	/** ANIMATION FIXED MENU **/
	$(window).scroll(function() {
		if($(this).scrollTop() > 55){
			if($(window).width() <= 558){
				$('#header-fixed-menu-wrapper').css({'position':'fixed','top':0, 'border-bottom':'1px solid #000'});
			}
			
			/** ANIMATION FIXED BACK TO TOP **/
			if($(window).width() > 558){
				$('#retour').css('display','block');
				$('#retour').stop().animate({'right':-10+"px"}, 500);
			}
		}else{
			if($(window).width() <= 558){
				$('#header-fixed-menu-wrapper').css({'position':'relative', 'border-bottom':'none'});
			}
			
			/** ANIMATION FIXED BACK TO TOP **/
			if($(window).width() > 558){
				$('#retour').stop().animate({'right':-100+"px"}, 500, function(){
					$('#retour').css('display','none');
				});				
			}		
		}
	});

	$('.mobile-menu-toggle-button').click(function(event) {
		$('.mobile-menu-toggle').animate({opacity: 0}, 200, function() {
			$(this).css('display', 'none');
			$('.menu-items').css({'display': 'block', 'opacity': 1});
		});	
		event.preventDefault();
	});

	$(document).mouseup(function() {
		if($('.menu-items').css('display') == "block") {
			$('.menu-items').animate({opacity: 0}, 200, function() {
				$('.menu-items').css('display', 'none');
				$('.mobile-menu-toggle').css('display', 'inline').animate({opacity: 1}, 500);
			});
		}
	});
	
	/** ANIMATION HOVER FIXED BACK TO TOP **/
	$('#retour').hover(function(){
		$(this).css({'background-color':'rgba(216,179,0,1)','color':'#fff'}, 500);
		$(this).stop().animate({'right':0+'px'}, 500);
	}, function(){
		$(this).stop().animate({'right':-10+'px'}, 500);
		$(this).css({'background-color':'rgba(216,179,0,0.8)','color':'#474747'}, 500);
	});	
	
	/** ANIMATION SLIDER NAV **/
	$('#slider-div').hover(function(){
		var nivoPrevNav = $('a.nivo-prevNav');
		var nivoNextNav = $('a.nivo-nextNav');
		nivoPrevNav.css('background','url(css/images/flecheg-hover-bg.png)');
		nivoNextNav.css('background','url(css/images/fleched-hover-bg.png)');
	}, function(){
		var nivoPrevNav = $('a.nivo-prevNav');
		var nivoNextNav = $('a.nivo-nextNav');
		nivoPrevNav.css('background','url(css/images/flecheg-bg.png)');
		nivoNextNav.css('background','url(css/images/fleched-bg.png)');
	});
	
	/** ANIMATION SCROLLING **/
	$(".scroll").click(function(event){		
		event.preventDefault();
		if($(window).width() <= 558){
			$('html,body').animate({scrollTop:$(this.hash).offset().top-50}, 1000, false);
		}
		if($(window).width() > 558){
			$('html,body').animate({scrollTop:$(this.hash).offset().top+5}, 1000, false);
		}
	});
});