window.onresize=resizeFix;//如果当前页面被调整，重新绘制网页大小
if(document.layer){//对象document.layer只有在Netscape 4.x浏览器中存在
	var orgiWidth=window.innerWidth;
	var orgiHeight=window.innerHeight;
}
 function resizeFix(){
 	if(document.layer){
 		if(window.innerWidth!=orgiWidth||window.innerHeight!=orgiHeight){
 		window.location.reload();
 	   }
 	}	
 }