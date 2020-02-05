$(function(){
	$('.bsdb img')
	console.log($('.bsdb img'));
	var num=1
	setInterval(function(){
		if (num==1) {
			$('.bsdb img').eq(0).attr('src','img/aboutxiaoniao/jiazhi_border_12.png')
			$('.bsdb img').eq(1).attr('src','img/aboutxiaoniao/jiazhi_border_22.png')
			$('.bsdb img').eq(2).attr('src','img/aboutxiaoniao/jiazhi_border_32.png')
			$('.bsdb img').eq(3).attr('src','img/aboutxiaoniao/jiazhi_border_42.png')
			num=2
		}else if (num==2) {
			$('.bsdb img').eq(0).attr('src','img/aboutxiaoniao/jiazhi_border_11.png')
			$('.bsdb img').eq(1).attr('src','img/aboutxiaoniao/jiazhi_border_21.png')
			$('.bsdb img').eq(2).attr('src','img/aboutxiaoniao/jiazhi_border_31.png')
			$('.bsdb img').eq(3).attr('src','img/aboutxiaoniao/jiazhi_border_41.png')
			num=1
		}
	},800)
	
	
	
	
	$('.disjg-right').on('click',function(){
		dcdsjc(1)
		$('.btnb').eq(0).css('left','78px')
		$('.btnb').eq(1).css('left',0)
		$('.zhniio').css({
			'transition':'all 1s',
			'left':'-910px'
		})
	})
	$('.dsifhsd-left').on('click',function(){
		dcdsjc(0)
		$('.btnb').eq(0).css('left','0')
		$('.btnb').eq(1).css('left','-78px')
		$('.zhniio').css({
			'transition':'all 1s',
			'left':'0px'
		})
	})
	
	function dcdsjc(num){
		$('.btnb').removeClass('now')
		$('.btnb').eq(num).addClass('now')
	}
})