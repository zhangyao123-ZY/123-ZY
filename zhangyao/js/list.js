$(function() {
	
	
	//数据
	var arr = [{
			'id': 0,
			'oimg': 'img/list_img01.jpg',
			'title': '卓新思创重装出发',
			'time': '2016-02-03',
			'contion': '小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台'
		}, {
			'id': 1,
			'oimg': 'img/list_img02.jpg',
			'title': '小鸟掌学开通国外渠道',
			'time': '2016-02-03',
			'contion': '小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台'
		},
		{
			'id': 2,
			'oimg': 'img/list_img03.jpg',
			'title': '卓新思创天气app上线',
			'time': '2016-02-03',
			'contion': '小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台'
		},
		{
			'id': 3,
			'oimg': 'img/list_img04.jpg',
			'title': '国外报道',
			'time': '2016-02-03',
			'contion': '小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台'
		},
		{
			'id': 4,
			'oimg': 'img/list_img01.jpg',
			'title': '卓新思创重装出发',
			'time': '2016-02-03',
			'contion': '小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台'
		},
		{
			'id': 5,
			'oimg': 'img/list_img02.jpg',
			'title': '卓新思创重装出发',
			'time': '2016-02-03',
			'contion': '小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台'
		},
		{
			'id': 6,
			'oimg': 'img/list_img03.jpg',
			'title': '卓新思创重装出发',
			'time': '2016-02-03',
			'contion': '小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台'
		},
		{
			'id': 7,
			'oimg': 'img/list_img04.jpg',
			'title': '卓新思创重装出发',
			'time': '2016-02-03',
			'contion': '小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台'
		},
		{
			'id': 8,
			'oimg': 'img/list_img01.jpg',
			'title': '卓新思创重装出发',
			'time': '2016-02-03',
			'contion': '小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台'
		},
		{
			'id': 9,
			'oimg': 'img/list_img03.jpg',
			'title': '卓新思创重装出发',
			'time': '2016-02-03',
			'contion': '小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台'
		},
		{
			'id': 10,
			'oimg': 'img/list_img02.jpg',
			'title': '卓新思创重装出发',
			'time': '2016-02-03',
			'contion': '小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台'
		},
			{
			'id': 11,
			'oimg': 'img/list_img04.jpg',
			'title': '卓新思创重装出发',
			'time': '2016-02-03',
			'contion': '小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台'
		},
		{
			'id': 12,
			'oimg': 'img/list_img01.jpg',
			'title': '卓新思创重装出发',
			'time': '2016-02-03',
			'contion': '小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台'
		},
		{
			'id': 13,
			'oimg': 'img/list_img03.jpg',
			'title': '卓新思创重装出发',
			'time': '2016-02-03',
			'contion': '小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台'
		},
		{
			'id': 14,
			'oimg': 'img/list_img02.jpg',
			'title': '卓新思创重装出发',
			'time': '2016-02-03',
			'contion': '小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台'
		}
	
	];
console.log(arr.length);	
var num=0;
num=num+6;
$('.gengduo span').on('click',function(){
	num=num+6;
	if (num>=arr.length-2) {
		$('.gengduo img').attr('src','img/list_gomore_bg_nomore.jpg')
	}
	cont()
})
function cont(){
	var str2='';
	var str=arr.slice(0,num);
	//console.log(str);
	for (var i = 0; i < str.length; i++) {
		str2+=`<div class="col-md-6 list-col">
						<div class="list-ss">
							<img src="img/list_img_over_xiaojiantou.png" class="sanjiao">
							<img src="${str[i].oimg}" >
							<div class="list-contion">
								<h3>${str[i].title}</h3>
								<time>${str[i].time}</time>
								<p>${str[i].contion}</p>
							</div>
						</div>
					</div>`
	}	
	$('.row').html(str2)
}
cont()	
console.log($('.row'));
	
	
	
	
	
	
	
	
	$('.list-col').hover(function() {
		$('.sanjiao').eq($(this).index()).css({
			'left': '35px',
			'transition': 'all 0.5s'
		})
	}, function() {
		$('.sanjiao').eq($(this).index()).css({
			'left': '-15px',
			'transition': 'all 0s'
		})
	})

	












})
