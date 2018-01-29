window.onload=initAll;

function initAll(){
	if(top.location!=self.location){//如果当前页面不是浏览器窗口层次最顶层
		top.location.replace(self.location);//强迫页面总是单独显示
	}
}