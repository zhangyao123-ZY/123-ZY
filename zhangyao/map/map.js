// 百度地图API功能
	var map = new BMap.Map("allmap"); // 创建Map实例
	var poi = new BMap.Point(116.356158, 40.09425);
	map.centerAndZoom(poi, 15); // 初始化地图,设置中心点坐标和地图级别
	map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
	map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的
	//map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
	
	//创建和初始化地图函数：
	function initMap() {
		addMapControl();//向地图添加控件
	}
	
	//地图控件添加函数：
	function addMapControl() {
		//向地图中添加缩放控件
		var ctrl_nav = new BMap.NavigationControl({
			anchor : BMAP_ANCHOR_TOP_LEFT,
			type : BMAP_NAVIGATION_CONTROL_LARGE
		});
		map.addControl(ctrl_nav);
		//向地图中添加缩略图控件
		var ctrl_ove = new BMap.OverviewMapControl({
			anchor : BMAP_ANCHOR_BOTTOM_RIGHT,
			isOpen : 1
		});
		map.addControl(ctrl_ove);
		//向地图中添加比例尺控件
		var ctrl_sca = new BMap.ScaleControl({
			anchor : BMAP_ANCHOR_BOTTOM_LEFT
		});
		map.addControl(ctrl_sca);
	}
	
	var content = '<div style="margin:0;line-height:20px;padding:2px;">' +
	                '<img src="images/xiaoniao_icon.png" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>' +
	                '地址：北京市昌平区站前东街2号<br/>电话：(010)028-8888888<br/>简介：田园风光综合商业楼3层，为小鸟掌学综合研发及办公地址。' +
	              '</div>';
	 //创建检索信息窗口对象
	var searchInfoWindow = null;
	searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
			title  : "卓新思创",      //标题
			width  : 290,             //宽度
			height : 105,              //高度
			panel  : "panel",         //检索结果面板
			enableAutoPan : true,     //自动平移
			searchTypes   :[
				BMAPLIB_TAB_TO_HERE,  //到这里去
				BMAPLIB_TAB_SEARCH,   //周边检索
				BMAPLIB_TAB_FROM_HERE //从这里出发
			]
		});
	
	
	var marker = new BMap.Marker(poi); //创建marker对象
	marker.addEventListener("click", function(e){
	    searchInfoWindow.open(marker);
	})
	marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
	map.addOverlay(marker); //在地图中添加marker
	initMap();//创建和初始化地图