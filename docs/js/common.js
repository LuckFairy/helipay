mui.init({
	swipeBack: true, //启用右滑关闭功能
	gestureConfig: {
		tap: true, //默认为true
		doubletap: true, //默认为false
		longtap: true, //默认为false
		swipe: true, //默认为true
		drag: true, //默认为true
		hold: true, //默认为false，不监听
		release: true //默认为false，不监听
	}

});
mui.ready(function() {
	mui('.mui-scroll-wrapper').scroll({
		scrollY: true, //是否竖向滚动
		scrollX: false, //是否横向滚动
		startX: 0, //初始化时滚动至x
		startY: 0, //初始化时滚动至y
		indicators: false, //是否显示滚动条
		deceleration: 0.0006, //阻尼系数,系数越小滑动越灵敏
		bounce:true //是否启用回弹
	});
	//首页轮播图自动播放
	if(mui("#slider").length>0) {
		var slider = mui("#slider");
		slider.slider({
			interval: 1000
		});
	}
	//链接跳转点击事件
	var navLinkArr = document.querySelectorAll('.open-link');
	for(var i = 0; i < navLinkArr.length; i++) {
		navLinkArr[i].addEventListener('tap', function() {
			mui.openWindow({
				url: this.getAttribute('href'),
				id: i,
				createNew: false, //是否重复创建同样id的webview，默认为false:不重复创建，直接显示
				show: {
					autoShow: true, //页面loaded事件发生后自动显示，默认为true
					aniShow: 'slide-in-right', //页面显示动画，默认为”slide-in-right“；
					duration: 300, //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
					event: 'titleUpdate', //页面显示时机，默认为titleUpdate事件时显示
					extras: {} //窗口动画是否使用图片加速
				},
				waiting: {
					autoShow: true, //自动显示等待框，默认为true
					title: '正在加载...', //等待对话框上显示的提示内容
					options: {
						width: 300, //等待框背景区域宽度，默认根据内容自动计算合适宽度
						height: 300, //等待框背景区域高度，默认根据内容自动计算合适高度
	
					}
				}
			})

		})
	}
	//提示条点击关闭
	var closeNode = document.querySelectorAll('.close');
	for(var i=0;i<closeNode.length;i++){
		closeNode[i].addEventListener('tap',function(){
			var noticeBar = closest(this,'.notice-bar');
			noticeBar.style.display = 'none';
		})
	}
	//客服电话
	mui('.mui-content').on('tap', '.customer-btn',function() {
		var btnArray = ['返回','呼叫'];
		mui.confirm('400-096-6263',' ',btnArray,function(e){
			switch(e.index){
				case 1:
				if(mui.os.plus){
					plus.device.dial("4000966263");
				}else{
					location.href = 'tel:4000966263';
				};
				break;
				default:break;
			}
		})
	});
	//没有绑定，提示绑定结算卡
	mui('.mui-content').on('tap','bang-btn',function(){
		var btnArray = ['取消','去绑卡'];
		mui.confirm('您未绑定结算卡，请绑定后再操作。',' ',btnArray,function(e){
			switch(e.index){
				case 1:
					location.href = 'html/bc_jiesuan.html';
					break;
				default:break;
			}
		})
	})
	//退出登录
	mui('.mui-content').on('tap','.back-app',function(){
		var btnArray = ['取消','确定'];
			mui.confirm('确定退出登录吗？',' ',btnArray,function(e){
				switch(e.index){
					case 1:
					mui.alert('退出登录操作');
					break;
					default:break;
				}
			})
	})
	
})

function closest(el, selector) {
    var matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

    while (el) {
        if (matchesSelector.call(el, selector)) {
            break;
        }
        el = el.parentElement;
    }
    return el;
}
function hasClass(obj, cls) {
	return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(obj, cls) {
	if(!this.hasClass(obj, cls)) obj.className += " " + cls;
}

function removeClass(obj, cls) {
	if(hasClass(obj, cls)) {
		var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
		obj.className = obj.className.replace(reg, ' ');
	}
}

function toggleClass(obj, cls) {
	if(hasClass(obj, cls)) {
		removeClass(obj, cls);
	} else {
		addClass(obj, cls);
	}
}
//定时器
function timer(obj) {
	clearInterval(obj.timer);
	obj.dom.innerHTML = obj.time+'s';
	obj.dom.className = 'msg-btn';
	var i = obj.time;
	obj.timer = setInterval(function() {
		i--;
		if(i <= 0) {
			clearInterval(obj.timer);
			i = obj.time;
			obj.dom.classname = 'msg-btn white-btn';
			if(obj.fn) {
				obj.fn();
			}
		}else{
			obj.dom.classname = 'msg-btn';
			obj.dom.innerHTML = i+'s';
		}
	}, 1000);
}
