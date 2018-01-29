window.onload=initRollovers;
function initRollovers(){
	for(var i=0;i<document.images.length;i++){
      if(document.images[i].parentNode.tagName.toLowerCase()=="a"){
      			setRollover(document.images[i]);
      		}
	}
}

function setRollover(thisImg){
    var re=/\s*_off\s*/;


	thisImg.outImg=new Image();
	thisImg.outImg.src=thisImg.src;
	thisImg.onmouseout=function(){
		this.src=this.outImg.src;
	}



	thisImg.overImg=new Image();
	thisImg.overImg.src=thisImg.src.replace(re,"_on");
	thisImg.onmouseover=function (){
		this.src=this.overImg.src;
	}


	thisImg.clickImg=new Image();
	thisImg.clickImg.src=thisImg.src.replace(re,"_click");
	thisImg.onclick=function (){
		this.src=this.clickImg.src;
	}
}