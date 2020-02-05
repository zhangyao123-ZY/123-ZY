$(function(){
	//导航条部分
	var aa
	$('.heard-ul-one-li').hover(function() {
		//console.log($(this).index());
		if ($(this).index() == 1) {
			aa = 0
		}
		if ($(this).index() == 3) {
			aa = 1
		}
		if ($(this).index() == 4) {
			aa = 2
		}
		$('.one1-ul').eq(aa).css('display', 'block')
	}, function() {
		$('.one1-ul').eq(aa).css('display', 'none')
	})
	//console.log($('.navbar-nav li'));
	$('.navbar-nav li a').hover(function() {
		$(this).addClass('bg1')
		//console.log($(this));
	}, function() {
		//console.log($(this).index());
		$(this).removeClass('bg1')
	})
	//console.log($('.navbar-nav li a:first'));
	$('.navbar-nav li a:first').hover(function() {
		$(this).addClass('bg1')
	}, function() {
		$(this).addClass('bg1')
	})
	//音乐
	// $('.music span').on('mouseover',function(){
	// 	var num=$(this).index()
	// 	//console.log(num);
	// 	//$('.music-src audio').eq(num).play();
	// 	var aa=$('.music-src audio').eq(num)
	// 	aa.play();
	// })
	// //console.log($('.music span'));
	// console.log($('.music-src audio'));
	
	
	//返回底部
	$(window).scroll(function(){
		//console.log($(window).scrollTop());
		if ($(window).scrollTop()>580) {
			$('.fixed').css('display','block')
		}else{
			$('.fixed').css('display','none')
		}
		
	
	})
		//点击返回顶部
	$('.jiantou').on('click',function(){
		$('body,html').animate({
			'scrollTop':0
		},500)
	})
})