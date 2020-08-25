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
	
	
	//header include
	$("#header").load("inc/header_index.html");

	
    //main cont swiper
    var mySwiper = new Swiper('.main_swiper', {
       
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        simulateTouch:false, // touch 방지
        speed: 1000,
        fadeEffect: {
            crossFade: true
        },
        parallax: true,
        effect: 'slide', // 페이드 효과 사용
        loop: true, // 무한 반복

        grabCursor: true,
        paginationClickable: true,
        parallax: true,
        mousewheelControl: 1,
        pagination: {
            el: '.swiper-pagination',
			type: 'fraction',
            clickable: true,
            renderBullet: function(index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },
        navigation: { // 네비게이션 설정
            nextEl: '.swiper-button-next', // 다음 버튼 클래스명
            prevEl: '.swiper-button-prev', // 이번 버튼 클래스명
        },


	});
	
	// scroll event
	$(window).scroll(function() {
		var hdHeight = $('.header').height();
		var mainHeight = $('.main_vis').height();
		var windowTop = $(window).scrollTop();
		// header scroll
		if(windowTop >= hdHeight) {
			$('.header').addClass('scroll');
		} else {
			$('.header').removeClass('scroll');
		}

		// main_vis scroll
		if(windowTop >= mainHeight) {
			$('.header').addClass('black');
		} else {
			$('.header').removeClass('black');
		}


	});

	
	

	



});



