window.onload=initCookie;
function initCookie(){
	var now=new Date();
	var exprieDate=new Date();
	exprieDate.setMonth(exprieDate.getMonth()+6);
    var lastVisit=new Date(cookieval("lastVisit"));
	
	document.cookie="lastVisit"+"="+now+";expries="+exprieDate.toGMTString();
	 var allTag=document.getElementsByTagName("p");
     for(var i=0;i<allTag.length;i++){
     	if(allTag[i].id.indexOf("new-")!=-1){
           newCheck(allTag[i],allTag[i].id.substring(4));
     	}
     }


 function newCheck(tagName,tagString){
      var year=parseInt(tagString.substring(0,4),10);
      var mm=parseInt(tagString.substring(4,6),10);
      var day=parseInt(tagString.substring(6,8),10);
      var lastChange=new Date(year,mm-1,day);
      if(lastChange.getTime()>lastVisit.getTime()){
      	tagName.className+="Img";
      }
 }

}

function cookieval(cookieName){
   var thiscookie=document.cookie.split(";");
   for(var i=0;i<thiscookie.length;i++){
   	if(cookieName==thiscookie[i].split("=")[0]){
   		return thiscookie[i].split("=")[1];
   	}
   }
   return "1 January 1970";
}