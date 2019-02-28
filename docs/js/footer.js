var nav = document.createElement('nav');
var content = document.getElementsByClassName("mui-content")[0];
nav.className = 'mui-bar mui-bar-tab bar-footer ';
var footerObj = 
	[{
		href:'index.html',
		title:'首页',
		icon:'icon icon_home',
		id:'home'
		
	},{
		href:'html/tabbar_zd.html',
		title:'账单',
		icon:'icon icon_bill',
		id:'bill'
		
	},{
		href:'html/tabbar_we.html',
		title:'我的',
		icon:'icon icon_my',
		id:'my'
	}
	];
	var frag = document.createDocumentFragment(),
		pathname = location.pathname.slice(1);console.info(pathname)
	for(var i=0;i<footerObj.length;i++){
		var a = document.createElement('a');
		if(pathname==footerObj[i].href){
			a.className = 'open-link mui-tab-item mui-active';
		}else if(pathname.length==0&& i==0){
			a.className = 'open-link mui-tab-item mui-active';
		}
		else{
			a.className = 'open-link mui-tab-item ';
		}
		a.id = footerObj[i].id;
		a.href = footerObj[i].href;
		a.innerHTML = '<span class="mui-icon '+footerObj[i].icon+'"></span><span class="mui-tab-label">'+footerObj[i].title+'</span>';
		frag.appendChild(a);
	}
	nav.appendChild(frag);
	document.body.insertBefore(nav,content);


       
