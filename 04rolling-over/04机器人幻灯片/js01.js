window.onload=initLink;
var thisPic=0;
var RobotImg=new Array("../images/robot1.jpg","../images/robot2.jpg","../images/robot3.jpg");
function initLink(){
    document.getElementById("preLink").onclick=PreviousLink;
    document.getElementById("nextLink").onclick=NextLink;
}
function PreviousLink(){
	if(thisPic==0){
		thisPic=RobotImg.length;
	}
		thisPic--;
		document.getElementById("robotImg").src=RobotImg[thisPic];
	    return false;
}
function NextLink(){
	    thisPic++;
	if(thisPic==RobotImg.length){
		thisPic=0;
	}
		document.getElementById("robotImg").src=RobotImg[thisPic];
		return false;
	
}
