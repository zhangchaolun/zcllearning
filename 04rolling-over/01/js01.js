// window.onload=rolloverInit;
// function rolloverInit(){
// 	for (var i = 0; i < document.images.length; i++) {
// 		if(document.images[i].parentNode.tagName=='A'){
// 			setupRollover(document.images[i]);
// 		}
// 	}
// }
// function setupRollover(thisImage){
// 	thisImage.outImage=new Image();
// 	thisImage.outImage.src=thisImage.src;
// 	thisImage.onmouseout=function(){
// 		this.src=this.outImage.src;
// 	}
// 	thisImage.overImage=new Image();
// 	thisImage.overImage.src="images/"+thisImage.id+"_on.gif";
// 	thisImage.onmouseover=function(){
// 		this.src=this.overImage.src;
// 	}
// 	thisImage.clickImage=new Image();
// 	thisImage.clickImage.src="images/"+thisImage.id+"_click.gif"
// 	thisImage.onclick=function(){
// 		this.src=this.clickImage.src;
// 	}
// }
// window.onload=rolloverInit;
// function rolloverInit(){
// 	for(var i=0;i<document.links.length;i++){
//        var linkObj=document.links[i];//把当前链接设置为链接对象变量
//        if(linkObj.id){
//        	var imgObj=document.getElementById(linkObj.id+"Img");
//        	if(imgObj){
//        		setupRollover(linkObj,imgObj);
//        	}
//        }
// 	}
// }
// function setupRollover(thisLink,thisImage){
// 	thisLink.imgToChange=thisImage;//链接改变的对象
// 	thisLink.onmouseout=function(){//鼠标移出触发函数
// 		this.imgToChange.src=this.outImage.src;
// 	}thisLink.onmouseover=function(){//鼠标移入触发函数
// 		this.imgToChange.src=this.overImage.src;
// 	}
// 	thisLink.outImage=new Image();
// 	thisLink.outImage.src=thisImage.src;
// 	thisLink.overImage=new Image();
// 	thisLink.overImage.src="images/"+thisLink.id+"_on.gif";
// }
window.onload=rolloverInit;
function rolloverInit(){
	for(var i=0;i<document.links.length;i++){
		var linkObj=document.links[i];//设置为当前的链接
		}
		if(linkObj){
        var imgObj=document.getElementById(linkObj.id+"Img");
		if(imgObj){
			setupRollover(linkObj,imgObj);
		}
    }	
}
function setupRollover(thisLink,thisImage){
    thisLink.imgToChange=thisImage;
    thisLink.onmouseout=function(){
    	this.imgToChange.src=this.outImage.src;
    }
    thisLink.onmouseover=function(){
    	this.imgToChange.src=this.overImg.src;
    }
    thisLink.outImage=new Image();
    thisLink.outImage.src=thisImage.src;

    thisLink.overImg=new Image();
    thisLink.overImg.src="images/"+thisLink.id+"_on.gif";
}