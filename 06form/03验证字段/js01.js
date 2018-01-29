window.onload=initForm;
function initForm(){
	for(var i=0;i<document.forms.length;i++){
		document.forms[i].onsubmit=validForm;
	}
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
          outClass+=validBaseClasses(allClasses[j])+"";
    }
    thisTag.className=outClass;
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
    return (inTag.value==document.getElementById(otherfieldID).value);
}
}
 function changeColor(parentNode){
    if(parentNode.nodeName=="LABEL"){
        parentNode.className+=" invalid";
    }
 }
}
