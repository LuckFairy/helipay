	var header = document.createElement('div');
	var content = document.getElementsByClassName("mui-content")[0];
	header.className = 'mui-bar mui-bar-nav';
	header.innerHTML = '<a class="mui-action-back mui-icon mui-icon-arrowleft mui-pull-left"></a><h1 class="mui-title">'+document.title+'</h1>';
	if(dataConfig.bc_list_flag){
		var a = document.createElement('a');
		a.href = '../html/bc_list_credit.html';
		a.className = 'mui-pull-right open-link header-right';
		a.innerText = '支持银行';
		header.appendChild(a);
	}
	if(dataConfig.c_list_flag){
		var a = document.createElement('a');
		a.className = 'mui-pull-right header-right mui-action-back';
		a.innerText = '完成';
		header.appendChild(a);
	}
	document.body.insertBefore(header,content);
	
	
