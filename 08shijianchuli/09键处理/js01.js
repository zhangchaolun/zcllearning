document.onkeydown=initPic;
 var thisPic=0;
function initPic(evt){
   var myPic=new Array("images/callisto.jpg","images/europa.jpg","images/ganymede.jpg","images/io.jpg");
  
   var ltArrow=37;
   var rtArrow=39;
   var ImgCt=myPic.length-1;
   if(evt){
      var thisKey=evt.which;
   }
   else{
      var thisKey=window.event.keyCode;
    }

   if(thisKey==ltArrow){
   	Dirction(-1);
   }
   else if(thisKey==rtArrow){
   	Dirction(1);
   }
   return false;
   function Dirction(dirction){
	  thisPic=thisPic+dirction;
	  if(thisPic>ImgCt){
	  	thisPic=0;
	  }
	  else if(thisPic<0){
        thisPic=ImgCt;
	  }
	   document.getElementById("myPicture").src=myPic[thisPic];
   } 
 
}