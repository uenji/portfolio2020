$(document).ready(function(){
	/* 부드럽게 스크롤 */
 	$('a.page-scroll').bind('click', function(event) {
		event.preventDefault();
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: ($($anchor.attr('href')).offset().top)
		}, 1250, 'easeInOutExpo');
	});
	
	/* lnb */
	$('.m_btn').on('click', function(event) {
		event.preventDefault();
		if($(this).hasClass('active')) {
			$('.m_btn').removeClass('active');
		} else {
			$('.m_btn').addClass('active');
		}
		$('.cont01 .snb ul').toggle();
	});
	
	
  
	
	$('.top_btn a').click('click', function(event) {
		event.preventDefault();
		$('html, body').stop().animate({scrollTop: 0}, 1000);
	});	
	
	/* gnb 호버 */
   $('.gnb li > a')
    .on('mouseenter', function(e) {
	var parentOffset = $(this).offset(),
	relX = e.pageX - parentOffset.left,
	relY = e.pageY - parentOffset.top;
	$(this).find('span').css({top:relY, left:relX})
    })
	.on('mouseout', function(e) {
	var parentOffset = $(this).offset(),
	relX = e.pageX - parentOffset.left,
	relY = e.pageY - parentOffset.top;
	$(this).find('span').css({top:relY, left:relX})
	});
	
	/* mobile slick */
	
	$(window).resize(function (){   
	// width값을 가져오기
	var width_size = window.outerWidth;
	if (width_size <= 665 ) {
	$(".port_box").addClass("m_port_box");
	} else {
	$(".port_box").removeClass("m_port_box");
	$('.cont01 .snb ul').show();
	}

	}).resize();
	
	

	$("#header").load("inc/header_index.html");
});



