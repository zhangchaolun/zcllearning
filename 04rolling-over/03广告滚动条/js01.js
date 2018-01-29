// window.onload=rotate;
// 	var thisAd=0;
// function rotate(){

// 	var adImages= new Array("../images/reading1.gif","../images/reading2.gif","../images/reading3.gif");
// 	thisAd++;
// 	if(thisAd==adImages.length){
// 		thisAd=0;
// 	}
//     document.getElementById("adbanner").src=adImages[thisAd];
//     setTimeout(rotate,3*1000);
// }
// 
// 
// window.onload=initBannerLink;
// var thisAd=0;
// function initBannerLink(){
// 	if (document.getElementById("adBanner").parentNode.tagName == "A") {
//         document.getElementById("adBanner").parentNode.onclick = newLocation;
// }
// 	rotate();
// }

// function newLocation(){
// 	var adLinks=new Array("negrino.com","sun.com","microsoft.com");
//     document.location.href="http://www."+adLinks[thisAd];
//     return false;
// }
// function rotate(){
//     var adImages=new Array("../images/banner1.gif","../images/banner2.gif","../images/banner3.gif");
//     thisAd++;
//     if(thisAd==adImages.length){
//       thisAd=0;
//     }
//     document.getElementById("adBanner").src=adImages[thisAd];
//     setTimeout(rotate,3*1000);
// }



window.onload=initBannerLink;
var thisAd=0;
function initBannerLink(){
   if(document.getElementById("adBanner").parentNode.tagName=="A"){
   	document.getElementById("adBanner").parentNode.onclick=newLocation;
   }
   rotate();
}
function newLocation(){
	var adLinks=new Array("negrino.com","sun.com","microsoft.com");
	document.location.href="http://"+adLinks;
	return false;
}
function rotate(){
  var  adImages=new Array("../images/banner1.gif","../images/banner2.gif","../images/banner3.gif");
   thisAd++;
   if(thisAd==adImages.length){
   	thisAd=0;
   }
   document.getElementById("adBanner").src=adImages[thisAd];
   setTimeout(rotate,3*1000);
}