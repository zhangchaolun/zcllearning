// window.onload=initForms;

// function initForms(){
// 	var userName=""
// 	if(document.cookie!=""){
//      var userName=document.cookie.split("=")[1];
    
// 	}
// 	document.getElementById("namefield").value=userName;
// 	document.getElementById("namefield").onblur=setCookie;
// 	document.getElementById("formfield").onsubmit=setCookie;
	
// }

// function setCookie(){
// 	var exprieDate=new Date();
// 	exprieDate.setMonth(exprieDate.getMonth()+6);
// 	var userName=document.getElementById("namefield").value;
// 	document.cookie="userName="+userName+";expries="+exprieDate.toGMTString();
//  document.getElementById("cookieName").innerHTML="Hello, "+userName;
// }
// 
// 
// // 
// window.onload=initsetcookie;

// function initsetcookie(){
// 	var outMsg="";
// 	if(document.cookie==""){
//        outMsg="There are no cookie here";
// 	}
// 	else{
// 		var thiscookie=document.cookie.split(";");
		
// 		for(var i=0;i<thiscookie.length;i++){
// 			outMsg+="Cookie name is"+document.cookie.split("=")[0];
// 			outMsg+=",and the value is"+document.cookie.split("=")[1];
// 		}
// 	}
// 	document.getElementById("cookiename").innerHTML=outMsg;
// }
// 
// 
// window.onload=initCount;

// function initCount(){
// 	var exprieDate=new Date();
// 	exprieDate.setMonth(exprieDate.getMonth()+6);
// 	var count=parseInt(cookieval("pageInt"));
// 	count++;
// 	document.cookie="pageInt="+count+";expries="+exprieDate.toGMTString();
// 	document.getElementById("times").innerHTML="You have visited page"+count+"times.";
// }

// function cookieval(cookieName){
// 	var thiscookie=document.cookie.split(";");
// 	for(var i=0;i<thiscookie.length;i++){
// 		if(cookieName==thiscookie[i].split("=")[0]){
// 			return thiscookie[i].split("=")[1];
// 	    }
// 	}
// 	return 0;
// }
// 
// 
// 
// window.onload=cookieDelete;

// function cookieDelete(){
// 	var cookieCt=0;
// 	if(document.cookie!=""&&confirm("Do you want to delete the cookies?")){
// 		var exprieDate=new Date();
// 		var exprieDate.setMonth(exprieDate.getMonth()-1);

// 		var cookieCt=thiscookie.length;
// 		var thiscookie=document.cookie.split(";");
// 		for(var i=0;i<cookieCt;i++){
// 			var cookieName=document.cookie[i].split("=")[0];
// 			document.cookie=cookieName+"=;expries="+expries.toGMTString();
// 		}

// 	}
// 	document.getElementById("times").innerHTML="Number of cookies delete:"+cookieCt;
// }
// 
// 
window.onload=initCookie;

function initCookie(){
	var exprieDate=new Date();
	exprieDate.setMonth(exprieDate.getMonth()+6);

	var now=new Date();
    var hit=parseInt(cookieval("pageInt"));
    hit++;
    var lastVisit=cookieval("pageVisit");
    if(lastVisit==0){
    	lastVisit="";
    }
    document.cookie="pageInt="+hit+";expries="+exprieDate.toGMTString();
    document.cookie="pageVisit="+now+";expries="+exprieDate.toGMTString();
    var outMsg="You have visited this page "+hit+" times.";
    if(lastVisit!=""){
    	outMsg+="<br>Your last visit was"+lastVisit;
    }
    document.getElementById("times").innerHTML=outMsg;
}

function cookieval(cookieName){
	var thiscookie=document.cookie.split(";");
	for(var i=0;i<thiscookie.length;i++){
		if(cookieName==thiscookie[i].split("=")[0]){
			return thiscookie[i].split("=")[1];
		}
    
	}
	return 0;
}