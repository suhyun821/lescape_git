$(document).ready(function(){

	//top버튼
	$('.btn-top').click(function(){
		$('html,body').animate({scrollTop:0},300);
	});

	/*special offer 슬라이드*/
	$('.slide-area .slider1').each(function(){
		if($(this).find('.bxslider .item').length > 1){
			slider = $(this).find('.bxslider').bxSlider({
				mode:'fade',
			 	pager: true,
				autoControls:false,
				pause:7000, // 슬라이드 속도
				speed:500,
				onSliderLoad: function (currentIndex){

					//슬라이드 인덱스
					$('.bx-controls').prepend('	<div class="slide-number"></div>');
					$('.slide-number').prepend('<span class="current-index"></span><em>/</em><span class="all-index"></span>');

					var cIndex = currentIndex + 1;
					if(currentIndex < 10){
						$('.slide-number .current-index').text('0' + cIndex);
					}else {
						$('.slide-number .current-index').text(currentIndex + 1);
					}
				},
				onSlideBefore: function ($slideElement, oldIndex, newIndex){
					var nIndex = newIndex + 1;
					if(newIndex < 10){
						$('.slide-number .current-index').text('0'+nIndex);
					}else {
						$('.slide-number .current-index').text(newIndex + 1);
					}
				}
			});
		}
	});

	//총 슬라이드 수
	var len = $('.slider1 li').length;
	if(len < 10){
		var len2 = '0'+len;
		$('.slide-number .all-index').text(len2);
	}else {
		$('.slide-number .all-index').text(len);
	}

});

$(window).load(function(){
});

$(window).resize(function(){

});

$(window).scroll(function(){
		var winTop = $(this).scrollTop();
		/* top 버튼 show/hide */
		if(winTop > 0){
			$('.btn-top').fadeIn();
		}else{
			$('.btn-top').fadeOut();
		}
	});
