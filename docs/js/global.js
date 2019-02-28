/**
 * global.js
 * @authors beyondouyuan (beyondouyuan.github.io)
 * @date    2017-06-05 12:58:05
 * @version $1.0.0$
 */

/**
 * params：
 * init：初始化
 * ready：文档结构渲染就绪
 * browser：客户端设备检测
 * linkArr：打开链接数组
 * hasClass：样式检测
 * addClass：增加样式
 * removeClass：移除样式
 * toggleClass：样式切换
 **/

mui.init({
	swipeBack: true,
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
	mui('.scroll-container').scroll({
		scrollY: true, //是否竖向滚动
		scrollX: false, //是否横向滚动
		startX: 0, //初始化时滚动至x
		startY: 0, //初始化时滚动至y
		indicators: false, //是否显示滚动条
		deceleration: 0.0006, //阻尼系数,系数越小滑动越灵敏
		bounce: true //是否启用回弹
	});
	mui('#topMenu').on('tap', '#scan-code', function() {
		var scanContainer = document.getElementById('scan-container');
		addClass(scanContainer, 'active');
	});
	mui(document).on('tap', '#close-mask', function() {
		var scanContainer = document.getElementById('scan-container');
		removeClass(scanContainer, 'active');
	});
	mui('#scan-container').on('tap', '#merch-info-btn', function() {
		var scanContainer = document.getElementById('merch-container');
		addClass(scanContainer, 'active');
	});
	mui(document).on('tap', '#merch-close-mask', function() {
		var scanContainer = document.getElementById('merch-container');
		removeClass(scanContainer, 'active');
	});
	var linkArr = document.querySelectorAll('.opened-link');
	for(var i = 0; i < linkArr.length; i++) {
		linkArr[i].addEventListener('tap', function(event) {
			mui.openWindow({
				url: this.getAttribute('href'),
				id: this.getAttribute('id'),
//				createNew: false,
//				show: {
//					autoShow: true, //页面loaded事件发生后自动显示，默认为true
//					aniShow: 'slide-in-right', //页面显示动画，默认为”slide-in-right“；
//					duration: 300, //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
//				},
//				waiting: {
//					autoShow: true, //自动显示等待框，默认为true
//					title: '正在加载...', //等待对话框上显示的提示内容
//					options: {
//						width: '300px', //等待框背景区域宽度，默认根据内容自动计算合适宽度
//						height: '300px', //等待框背景区域高度，默认根据内容自动计算合适高度
//					}
//				}
			});
		})
	}
});

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