window.onload=initForms;

function initForms(){
	for(var i=0;i<document.forms.length;i++){
		document.forms[i].onsubmit=validForms;
	}
} 
 function validForms(){
 	var allTags=document.getElementsByTagName("*");
 	for(var i=0;i<allTags.length;i++){
 		validTags(allTags[i])
 		}
 		return false;

 	function validTags(thisTag){
 		var allClasses=thisTag.className.split(" ");
 		var outClass="";
 		for(var j=0;j<allClasses.length;j++){
          	outClass+=validBaseClass(allClasses[j])+" ";
 		}
 		thisTag.className=outClass;

 		if(outClass.indexOf("invalid")>-1){
 			invalidTag(thisTag.parentNode);
 			thisTag.focus();
 			if(thisTag.nodeName=="INPUT"){
 				thisTag.select();
 			}
 		}
 	

        function validBaseClass(thisClass){
        	var classBack="";
        	switch(thisClass){
        		case "":
        		case "invalid":
        		break;
        		case "pNumber":
        		if(!validPhone(thisTag.value)){
        			classBack+="invalid ";
        		}
        		default:
        		classBack+=thisClass;
            }
            return classBack;
        }
        
        function validPhone(phonenumber){
        	var re=/^\(?(\d{3})\)?[\.\-\/]?(\d{3})[\.\-\/]?(\d{4})$/;
        	var phoneArray=re.exec(phonenumber);
        	if(phoneArray){
        		document.getElementById("phoneNumber").value="("+phoneArray[1]+")"+phoneArray[2]+"-"+phoneArray[3];
        		return true;
        	}
        	return false;
        }

        function invalidTag(parentTag){
        	if(parentTag.nodeName=="LABEL"){
        		parentTag.className+=" invalid";
        	}
        }
    }
 }