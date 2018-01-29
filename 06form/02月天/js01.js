window.onload=initform;
function initform(){
	document.getElementById("months").selectedIndex=0;
	document.getElementById("months").onchange=changemonth;
}
function changemonth(){
	var monthDays=new Array(31,28,31,30,31,30,31,31,30,31,30,31);
	var theMonth=this.options[this.selectedIndex].value;
	if(theMonth!=""){
		var theStr=parseInt(theMonth);
	}
	document.getElementById("days").options.length=0;
	for(var i=0;i<monthDays[theStr];i++){
		document.getElementById("days").options[i]=new Option(i+1);
	}
}