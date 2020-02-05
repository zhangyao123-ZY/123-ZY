$(function(){
	
	//数据
	var arr=[
		{
			'id':0,
			'biao':'人力资源',
			'english':'company culture',
			'title':'人才理念',
			'oimg':'img/article_image08.jpg'
		},{
			'id':1,
			'biao':'人力资源',
			'english':'company culture',
			'title':'团队介绍',
			'oimg':'img/article_image09.jpg'
		},{
			'id':2,
			'biao':'人力资源',
			'english':'company culture',
			'title':'招聘信息',
			'oimg':'img/article_image10.jpg'
		},{
			'id':3,
			'biao':'公司文化',
			'english':'company culture',
			'title':'公司理念',
			'oimg':'img/article_image05.jpg'
		},
		{
			'id':4,
			'biao':'公司文化',
			'english':'company culture',
			'title':'公司文化',
			'oimg':'img/article_image06.jpg'
		},
		{
			'id':5,
			'biao':'公司文化',
			'english':'company culture',
			'title':'公司氛围',
			'oimg':'img/article_image07.jpg'
		},
		{
			'id':6,
			'biao':'联系电话',
			'english':'company culture',
			'title':'联系电话',
			'oimg':'img/article_image11.jpg'
		}
	]
	
	//截取URL
	//console.log(location.search);
	var oUrl=location.search;
	
	//console.log(oUrl.indexOf('=')+1);
	//console.log();
	var zhi=Number(oUrl.substr(oUrl.indexOf('=')+1,1));
	
	console.log(arr[zhi]);
	haha()
	function haha(){
		$('.company-bg1 h1').text(arr[zhi].biao)
		$('.company-bg1 h2').text(arr[zhi].english)
		$('.company-bg1 h3').text(arr[zhi].title)
		$('.imgg img').attr('src',arr[zhi].oimg)
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//console.log($('.link-btn'));
	$('.link-btn').hover(function(){
		$('.like').css({
			'width':'135px',
			'visibility':'visible',
			'transition': 'all 0.5s'
		})
	},function(){
		$('.like').css({
			'width':'0px',
			'visibility':'hidden'
		})
	})
	
	$('.link-btn').on('click',function(){
		$('.link-btn').css('background-position','0px -73px')
		$('.wansui').css('visibility','visible')
	})
})