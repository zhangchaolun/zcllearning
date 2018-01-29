window.onload=initForm;
function initForm(){
	for(var i=0;i<document.forms.length;i++){
		document.forms[i].onsubmit=validForm;
	}
	document.getElementById("sunroof").onclick=doorSet;
}
function validForm(){
	var allGood=true;
	var allTags=document.getElementsByTagName("*");
	for(var i=0;i<allTags.length;i++){
		if(!validTag(allTags[i])){
			allGood=false;
		}
	}
	return allGood;

function validTag(thisTag){
	var outClass="";
	var allClasses=thisTag.className.split(" ");//加个空格，成为数组后进行循环
    for(var j=0;j<allClasses.length;j++){
          outClass+=validBaseClasses(allClasses[j])+" ";
    }
    thisTag.className = outClass;
    if(outClass.indexOf("invalid")>-1){
       changeColor(thisTag.parentNode);
       thisTag.focus();
       if(thisTag.nodeName=="INPUT"){
         thisTag.select();
       }
       return false;
    }
    return true;

function validBaseClasses(thisClass){
	var backClass="";
	switch(thisClass){
		case "":
		case "invalid":
		  break;
		case "reqd":
		if(allGood&&thisTag.value==""){
         backClass="invalid ";  
		}
		backClass+=thisClass;
		  break;
		  case "radio":
		  if(allGood&&!radioCross(thisTag.name)){
		  	backClass="invalid ";
		  }
		  backClass+=thisClass;
		  break;
		  case "isZip":
		  if(allGood&&!inZip(thisTag.value)){
		  	backClass="invalid ";
		  }
		  backClass+=thisClass;
		  break;
		  case "isNum":
		  if(allGood&&!inNum(thisTag.value)){
		  	backClass="invalid ";
		  }
		  backClass=thisClass;
		  break;
		  case "email":
		  if(allGood&&!crossemail(thisTag.value)){
		  	backClass="invalid ";
		  }
		  backClass+=thisClass;
		  break;
		default:
		   if(allGood && !crossCheck(thisTag,thisClass)){
           backClass="invalid ";
		}
		backClass+=thisClass;
	}
	return backClass;

}
function crossCheck(inTag,otherfieldID){
    if(!document.getElementById(otherfieldID)){
    	return false;
    }
    return (inTag.value!=""||document.getElementById(otherfieldID).value!="");
}
	function radioCross(groupname){
 	var radioSet="";
 	for(var k=0;k<document.forms.length;k++){
 		if(!radioSet){
 			radioSet=document.forms[k][groupname];
 		}
 	}
 	if(!radioSet){
 		return false;
 	}
 	for(var k=0;k<radioSet.length;k++){
 		if(radioSet[k].checked){
 			return true;
 		}
 	}
 	return false;
 }
 function inNum(passval){
	for(var k=0;k<passval.length;i++){
		if(passval.charAt(k)<"0"){
           return false;
		}
		if(passval.charAt(k)>"9"){
			return false;
		}
	}
	return true;
}
function inZip(zip){
	if(zip==""){
		return true;
	}
	return inNum(zip);
}
function crossemail(email){
	var invalidchar=" :/;,";
	if(email==""){
			return false;
		}
	for(var k=0;k<invalidchar.length;k++){
		var badChar=invalidchar.charAt(k);
	   if(email.indexOf(badChar)>-1){
	   	return false;
	   }	
	}
	var nextchar=email.indexOf("@",1);
	if(nextchar==-1){
		return false;
	}
	if(email.indexOf("@",nextchar+1)!=-1){//确保@符号只有一个并且拒绝多个@符号输入
		return false;
	}
	if(email.indexOf(".",nextchar)==-1){
		return false;
	}
	var atpos=email.indexOf(".",nextchar);
	if(atpos+3>email.length){
        return false
	}
	return true;
}
 function changeColor(parentTag){
    if(parentTag.nodeName=="LABEL"){
        parentTag.className += " invalid";
    }
 }
 
 }
}
function doorSet(){
	if(this.checked){
		document.getElementById("twoDoor").checked=true;
	}
}
// indexOf总结
// indexOf("a")==-1没有找到a字符
// indexOf("a")>-1找到a字符并返回a的位置 ex：0   9
// indexOf("a")!=-1找到a的位置并且只有一个a