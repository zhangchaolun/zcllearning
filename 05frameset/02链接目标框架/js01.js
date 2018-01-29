// window.onload=initLink;
// function initLink(){
// 	for(var i=0;i<document.links.length;i++){
// 		document.links[i].target="content";//target:目标，与name有关
// 	}
// }
// 
// 
window.onload=initLink;

function initLink(){
	for(var i=0;i<document.links.length;i++){
		if(document.links[i].className=="newWin"){
			document.links[i].onclick=catWindow;
		}	
	}
}
function catWindow(){
	var cat=window.open(this.href,"catWin","width=100,height=100;");
     cat.focus();
	return false;
}