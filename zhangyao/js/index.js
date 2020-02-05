$(function() {
	

	//轮播图部分
	//console.log($('.banner-img li img'));
	var oImgHeightBanner = $('.banner-img li img').outerHeight()
	console.log(oImgHeightBanner);
	$('#banner').css('height', oImgHeightBanner + 'px')
	var num1 = 0;
	//右点击
	$('#banner-right').on('click', function() {
		num1++;
		if (num1 >= $('.banner-img li').length) {
			num1 = 0
		}
		zong()
		banner()
	})
	//左点击
	$('#banner-left1').on('click', function() {
		num1--;
		if (num1 < 0) {
			num1 = $('.banner-img li').length - 1
		}
		zong()
		banner()
	})

	function banner() {
		console.log($('.banner-img li')[1]);
		for (var i = 0; i < $('.banner-img li').length; i++) {
			//console.log($('.banner-img li')[i]);
			$('.banner-img li').eq(i).removeClass('action');
			$('#zhishi li').eq(i).removeClass('zhis');
		}
		$('.banner-img li').eq(num1).addClass('action');
		$('#zhishi li').eq(num1).addClass('zhis');
	}
	//小知识点
	//console.log($('#zhishi li'));
	$('#zhishi li').on('click', function() {

		for (var i = 0; i < $('#zhishi li').length; i++) {
			$('#zhishi li').eq(i).removeClass('zhis')
			$('.banner-img li').eq(i).removeClass('action');
		}
		//console.log($(this).index()-1);
		$('#zhishi li').eq($(this).index() - 1).addClass('zhis')
		$('.banner-img li').eq($(this).index() - 1).addClass('action');
		num1 = $(this).index() - 1
	})


	//动画
	//$('.twoimg').fadeIn(1000)
	// $('.twoimg').css({
	// 	"top":"34.5%",
	// 	"left":"33%"
	// })

	function zong() {
		if (num1 == 0) {
			one1()
		}
		if (num1 == 1) {
			two1()
		}
		if (num1 == 2) {
			three1()
		}
	}
	one1()

	function one1() {
		$('.twoimg').css({
			"left": "0%"
		}).animate({
			"left": "33%"
		}, 500)

		$('.threeimg').css({
			"right": "0%"
		}).animate({
			"right": "36%"
		}, 500, function() {
			$('.threeimg').animate({
				"right": "34%"
			}, 700)
		})
	}
	two1()

	function two1() {
		$('.fiveimg').css('left', '0%').animate({
			'left': '16%'
		}, 500)
		$('.siximg').css('right', '0%').animate({
			'right': '62%'
		}, 500, function() {
			$('.siximg').animate({
				'right': '60%'
			}, 700)
		})

	}
	three1()

	function three1() {
		$('.eightimg').css('left', '0%').animate({
			'left': '35.5%'
		}, 500)
		$('.niceimg').css('right', '0%').animate({
			'right': '38%'
		}, 500, function() {
			$('.niceimg').animate({
				'right': '36.5%'
			}, 700)
		})
	}

	//console.log($('.twoimg'));


	//第二个轮播图
	//console.log($('.banner2-right ul').children('li'));
	//console.log($('.banner2-right >ul >li').length);
	//右点击
	var num2 = 0
	$('.banner-line-prev').on('click', function() {
		num2++;
		if (num2 >= $('.banner2-right >ul >li').length) {
			num2 = 0
		}
		move222()
		banner2()
	})
	//左点击
	$('.banner-line-next').on('click', function() {
		num2--;
		if (num2 < 0) {
			num2 = $('.banner2-right >ul >li').length - 1
		}
		move333()
		banner2()
	})

	function banner2() {
		$('.banner2-right ul').children('li').removeClass('active3');
		$('.banner2-left ul').children('li').removeClass('active2')
		$('.banner2-right >ul >li').eq(num2).addClass('active3');
		$('.banner2-left> ul >li').eq(num2).addClass('active2')
	}
	//小焦点
	$('.banner2-left ul li').on('click', function(e) {
		
//需要老师解决
//我的思路if判断


console.log(e.wheelDelta);
		num2 = $(this).index()
		banner2()

	})
	
	//移动
	//从右向左移动
	//move2()
	function move222(){
		//console.log(22222222);
		$('.py1').css({'right':'-400px'}).animate({'right':0},500)
		$('.py11').css('left','20px').animate({'left':'-20px'},500)
		$('.py111').css('right','-60px').animate({'right':'-20px'},500)
	}
	//从左向右移动
	//move333()
	function move333(){
		console.log(111111);
	    $('.py1').css({'right':'800px'}).animate({'right':0},400)
	    $('.py11').css('left','-60px').animate({'left':'-20px'},500)
	    $('.py111').css('right','40px').animate({'right':'-20px'},500)	
	}
	
	
	
	//业务范围
	var num3=1;
	
//有问题，需要解决	
	$('.business-bg').on('click',function(){
		//var num3=1;
		//console.log(num3++);
		var num4=$(this).parents('li').index()
		
		hwhw(num4)
		
		
		
	})
	function hwhw(num4){
		if (num3==1) {
			$('.business-ul li').removeClass('action2')
			$('.business-disply').css('visibility','hidden')
			$('.business-ul li').eq(num4).addClass('action2')
			$('.business-disply').eq(num4).css('visibility','visible').slideDown(1000)
			//下拉
			//$('.business-disply').eq($(this).parents('li').index()).slideDown(1000)
			$('.business-icon').eq(num4).css({
				'background-position':'0 -67px',
				'transition': 'all 1s'
			})
			num3=2
		}else if (num3==2) {
			$('.business-ul li').removeClass('action2')
			$('.business-disply').css('visibility','hidden')
			//上卷
			$('.business-disply').eq(num4).css('visibility','hidden').slideUp(1000)
			$('.business-icon').eq(num4).css({
				'background-position':'0 0px',
				'transition': 'all 1s'
			})
			num3=1
			
		}
		}
	//点击差
	$('.business-icon').on('click',function(){
		var num5=$(this).parents('li').index()
		hwhw(num5)
	})
	
	
	
	//第三个轮播图
	//点击先执行动画，然后在移动
	
	
	move3()
	function move3(){
		$('.introduce-banner li').css({
			'left':'100px'
		}).animate({
			'left':0
		},500)
	}
	
	
	var num6=0
	//右点击
	$('#introduce-right').on('click',function(){
		num6++;
		//console.log(num6);
		if (num6>=$('.introduce-banner> li').length) {
			num6=0
		}
		dis3(num6)
	})
	//左点击
	$('#introduce-left').on('click',function(){
		num6--;
		//console.log(num6);
		if (num6<0) {
			num6=$('.introduce-banner> li').length-1
		}
		dis3(num6)
	})
	function dis3(num6){
		$('.introduce-banner> li').removeClass('active4');
		$('.introduce-banner >li').eq(num6).addClass('active4')
		//console.log($('.introduce-banner >li').eq(num6));
	}
	
	
	
	
	
	
	
		
})
