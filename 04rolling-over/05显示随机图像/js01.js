// window.onload=initAll;

// function initAll(){
// 	var RollImages=new Array("../images/lion.jpg","../images/tiger.jpg","../images/bear.jpg");
// 	var RandomImages=Math.floor(Math.random()*RollImages.length);
// 	document.getElementById("rollImage").src=RollImages[RandomImages];
// }
// 
// 
window.onload=initAll;
var thisPic=0;
var LoopImages=new Array("../images/reading1.gif","../images/reading2.gif","../images/reading3.gif");
function initAll(){
    var RandomImages=Math.floor(Math.random()*LoopImages.length);
    document.getElementById("loopImage").src=LoopImages[RandomImages];
    rotate();
}
function rotate(){
	thisPic++;
	if(thisPic==LoopImages.length){
		thisPic=0;
	}
	document.getElementById("loopImage").src=LoopImages[thisPic];
	setTimeout(rotate,3*1000);
}