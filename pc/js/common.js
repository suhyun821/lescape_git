$(document).ready(function(){
	gnbHeight(); //gnb 높이값(브라우저 높이에따라 스크롤)
	selectStyled(); // 디자인 셀렉트
	dotdotdot(); //말줄임
	/* ===========================================================================================================
		메인
	=========================================================================================================== */
	/*헤더 뉴스레터 버튼*/
	$('.header .btn-newsletter').click(function(){
		$(this).closest('.bottom').next('.newsletter-layer').addClass('on');
		$(this).addClass('on');
	});

	$('.header .newsletter-layer .btn-cancel').click(function(){
		$(this).closest('.header').find('.btn-newsletter').removeClass('on');
		$(this).closest('.newsletter-layer').removeClass('on');
	});

	/*뉴스레터레이어 체크박스*/
	$('.all input[type=checkbox]').change(function(){
		if(this.checked){
			$(this).parents('.check-wrap').find('input[type=checkbox]').prop('checked', true);
			$(this).parents('.check-wrap').find('.checkbox').addClass('checked');
		}else{
			$(this).parents('.check-wrap').find('input[type=checkbox]').prop('checked', false);
			$(this).parents('.check-wrap').find('.checkbox').removeClass('checked');
		}
	});
	$('.check-wrap input[type=checkbox]').change(function(){
		var inputLen = $(this).parents('.check-wrap').find('.check input[type=checkbox]').length;
		var ckeckLen = $(this).parents('.check-wrap').find('.check input[type=checkbox]:checked').length;

		if(ckeckLen >= inputLen){
			$(this).parents('.check-wrap').find('.all input[type=checkbox]').prop('checked', true);
			$(this).parents('.check-wrap').find('.all .checkbox').addClass('checked');
		}else{
			$(this).parents('.check-wrap').find('.all input[type=checkbox]').prop('checked', false);
			$(this).parents('.check-wrap').find('.all .checkbox').removeClass('checked');
		}
	});

	/*special offer 슬라이드*/
	$('.slide-area .slider1').each(function(){
		if($(this).find('.bxslider .item').length > 1){
			slider = $(this).find('.bxslider').bxSlider({
				mode:'fade',
			 pager: false,
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

	/* ===========================================================================================================
		공통
	=========================================================================================================== */
	//gnb
	$('.gnb .depth1 > li').mouseenter(function(){
		$(this).find('.depth1-title').addClass('on');
		$(this).find('.depth2').show();
	}).mouseleave(function(){
		$(this).find('a').removeClass('on');
		$(this).find('.depth2').hide();
	});

	//gnb 2depth위치
	$('.gnb .depth1 > li').each(function(){
		var idx = $(this).index();
		var pos = $(this).position();
		//console.log(pos);
		var posT = pos.top;
		$(this).find('.depth2 ul').css('top',posT -65);
	});

	//컨텐츠영역 내의 topmenu
	$('.top-menu-area .top-depth2 > li').click(function(){
		$('.top-menu-area .top-depth3').removeClass('on');
		$(this).find('.top-depth3').addClass('on');
	});

	//footer family사이트
		$('.family-site .btn-family').on('click', function(e){
			//e.preventDefault();
			$(this).toggleClass('on');
			  $('.family-site > ul').slideToggle(200);
		});
		$('.family-site').on('mouseleave', function(e){
			//e.preventDefault();
			$(this).find('.btn-family').removeClass('on');
			  $('.family-site > ul').slideUp(200);
		});

	/* -----------------------------------------------------------------------------------------------------------
		폼요소
	----------------------------------------------------------------------------------------------------------- */
	/* 체크박스 */
	$('input[type=checkbox].styled1').each(function(){
		$(this).parents('label').addClass('check-radio');
		$(this).wrap('<span class="checkbox">');
		if(this.checked){
			$(this).parents('.checkbox').addClass('checked');
		}
		if(this.disabled){
			$(this).parents('.checkbox').addClass('disabled');
		}
	});
	$('input[type=checkbox].styled1').change(function(){
		if(this.checked){
			$(this).parents('.checkbox').addClass('checked');
		}else{
			$(this).parents('.checkbox').removeClass('checked');
		}
	});

	/* 라디오박스 */
	$('input[type=radio].styled1').each(function(){
		$(this).parents('label').addClass('check-radio');
		$(this).wrap('<span class="radiobox">');
		if(this.checked){
			$(this).parents('.radiobox').addClass('checked');
		}
		if(this.disabled){
			$(this).parents('.radiobox').addClass('disabled');
		}
	});
	$('input[type=radio].styled1').change(function(){
		var name = $(this).attr('name');
		if(this.checked){
			$('.radiobox input[name='+name+']').parents('.radiobox').removeClass('checked');
			$(this).parents('.radiobox').addClass('checked');
		}
	});


	// $('.select-box .item').click(function(){
	// 	var val=$(this).closest('.select-box').find('select').val();
	// 	console.log(val);
	// });

	/* 파일첨부 */
	$('.input-file input[type=file]').change(function(){
		var file = $(this).val();
		$(this).closest('.input-file').find('input[type=text]').val(file);
	});

	/*
		데이트피커
	*/
	// 기본설정
	$('.datepicker').each(function(){
		var alt = $(this).closest('.date-text').find('.btn-calendar input');

		$(this).datepicker({
			dateFormat:'yy/mm/dd',
			numberOfMonths: 1,
			monthNames: ['01','02','03','04','05','06','07','08','09','10','11','12'],
			dayNamesMin: ['SUN','MON','TUE','WED','THU','FRI','SAT'],
			showMonthAfterYear: true,
			showOtherMonths:true,
			yearSuffix: '.',
			altField: alt,
			onSelect: function(dateText, inst) {
				$('.dimmed').remove();
				$('.btn-calendar input').closest('.date-text').css({'z-index':'1'}).removeClass('on')
					.find('.calendar-layer').hide();
				$('.week-setting-box .btn-calendar').closest('.week-setting-box').css({'z-index':'1'}).removeClass('on')
					.find('.calendar-layer').hide();
			}
		});
		$(this).find('.ui-state-default').removeClass('ui-state-active');
	});
		// 달력레이어 열기
		$('.date-text .btn-calendar').click(function(){
			if($(this).closest('.date-text').hasClass('on')){
				$('.btn-calendar input').closest('.date-text').css({'z-index':'1'}).removeClass('on')
					.find('.calendar-layer').hide();
				$('.dimmed').remove();
			}else{
				$(this).find('input').closest('.date-text').css({'z-index':'105'}).addClass('on')
					.find('.calendar-layer').fadeIn();
				$(this).append('<div class="dimmed opacity"></div>');
			}
		});

	$('.week-setting-box .btn-calendar').click(function(){
		$(this).closest('.week-setting-box').css({'z-index':'100'}).addClass('on').append('<div class="dimmed opacity"></div>')
			.find('.calendar-layer').fadeIn();
	});
	// 달력레이어 닫기
	$(document).on('click', '.dimmed', function(){
		$('.dimmed').remove();
		$('.btn-calendar input').closest('.date-text').css({'z-index':'1'}).removeClass('on')
			.find('.calendar-layer').hide();
		$('.week-setting-box .btn-calendar').closest('.week-setting-box').css({'z-index':'1'}).removeClass('on')
			.find('.calendar-layer').hide();
	});

});

$(window).load(function(){
});

$(window).resize(function(){
	gnbHeight();
});

function gnbHeight(){
	var headerH = $('.header').outerHeight();
	var headertopH = $('.header .top').outerHeight();
	var headerbtmH = $('.header .bottom').outerHeight();
	var gnbH = $('.gnb').outerHeight();
	var gnbnH = headerH - headertopH -headerbtmH -30;

	if(gnbH >  gnbnH) {
		$('.header .gnb').addClass('scroll').css('height',gnbnH);
	}else {
		$('.header .gnb').removeClass('scroll').css('height','inherit');
	}
}

//디자인셀렉트
function selectStyled(){
	/* 셀렉트 :셀렉트 선택값(value)은 변수 oVal로 처리 */
	$('select.styled1').each(function(){
		if(!$(this).parents('div').hasClass('select-box')){
			var title = $(this).find('option:first-child').html();
			var wid = $(this).outerWidth();
			$(this).wrap('<div class="select-box">');
			$(this).parents('.select-box').css({'width':wid}).append('<div class="select-title">');
			$(this).parents('.select-box').find('.select-title').html(title);

			/* 스크롤이 있어야 하는 경우와 아닌 경우 */
			if ($(this).hasClass('scroll')){
				$(this).parents('.select-box').append('<ul class="select-list scroll-wrap">');
			}else{
				$(this).parents('.select-box').append('<ul class="select-list">');
			}

			var option = $(this).find('option');
			$(option).each(function(){
				var txt = $(this).html();
				$(this).parents('.select-box').find('.select-list').append('<li class="item">' + txt);
				$(this).parents('.select-box').find('.item:first-child').addClass('on');
			});

			$(this).change(function(){
				var transVal = $(this).val();
				$('.select-title').html(transVal);
				alert(transVal);
			});

			if($(this).attr('disabled')){
				$(this).parents('.select-box').addClass('disabled');
			}
		}
	});

	$(document).on('click', '.select-title', function(){
		if($(this).parents('.select-box').hasClass('disabled') == false){
			$(this).parents('.select-box').addClass('focus').find('.select-list').slideDown(200);
			$(this).parents('.select-box').append('<div class="select-close" style="position:fixed;left:0;right:0;top:0;bottom:0;">');
		}
	});
	$(document).on('click', '.select-box .item', function(){
		$(this).parents('.select-box').find('.item').removeClass('on');
		$(this).addClass('on');
	});
	$(document).on('click', '.select-box .item', function(){
		var idx = $(this).index();
		var oVal = $(this).parents('.select-box').find('option').eq(idx).val();
		var txt = $(this).html();
		$(this).addClass('on');
		$(this).parents('.select-box').find('select').val(oVal);
		$(this).parents('.select-box').find('.select-title').html(txt);
		$(this).parents('.select-box').removeClass('focus').attr('value', oVal);
		$(this).parents('.select-list').hide();
		$('.select-close').remove();
	});
	$(document).on('click', '.select-close', function(){
		$('.select-close').remove();
		$('.select-list').hide();
		$('.select-box').removeClass('focus');
	});
}

/* 셀렉트 박스 재호출 */
function reSelect(){
 $('.select-box .item').remove();
 $('select.styled1 option').each(function(){
  var txt = $(this).html();
  $(this).parents('.select-box').find('.select-list').append('<li class="item">' + txt + '</li>');
  $(this).parents('.select-box').find('.item:first-child').addClass('on');
 });
 $('.select-title').each(function(){
  var title = $(this).closest('.select-box').find('select option:first-child').html();
  var val = $(this).closest('.select-box').find('select option:first-child').val();
  $(this).html(title).closest('.select-box').attr('value', title);
 });
}

/* 말줄임 */
function dotdotdot(){
	(function($) {
		$('.dotLine2').dotdotdot();// 2 줄
		$('.dotLine3').dotdotdot();// 3 줄
		$('.dotLine4').dotdotdot();// 4 줄
		$('.dotLine5').dotdotdot();// 5 줄
	})(jQuery);
}
