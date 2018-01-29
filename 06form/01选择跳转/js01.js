window.onload=initform;
window.onunload=function(){};
function initform(){
	document.getElementById("topic").selectedIndex=0;
	document.getElementById("topic").onchange=jumpTroll;
}
function jumpTroll(){
	var newToc=document.getElementById("topic");
	var newpage=newToc.options[newToc.selectedIndex].value;
	if(newpage!=""){
		window.location=newpage;
	}
}