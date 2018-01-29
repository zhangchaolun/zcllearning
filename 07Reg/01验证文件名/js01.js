window.onload=initForm;
function initForm(){
	for(var i=0;i<document.forms.length;i++){
		document.forms[i].onsubmit=initTag;
	}
}
function initTag(){
	var allGood=true;
	var allTag=document.getElementsByTagName("*");
	for(var i=0;i<allTag.length;i++){
		if(!validTag(allTag[i])){
			allGood=false;
		}
	}
	return allGood;


	function validTag(thisTag){
		var outClass="";
		var allClasses=thisTag.className.split(" ");
		for(var j=0;j<allClasses.length;j++){
            outClass+=validBaseClass(allClasses[j])+" ";
		}
		    thisTag.className=outClass;

		if(outClass.indexOf("invalid")>-1){
			labelInvalid(thisTag.parentNode);
			thisTag.focus();
			if(thisTag.nodeName=="INPUT"){
			thisTag.select();
		    }
		    return false;
		}
        return true;
            

        function validBaseClass(thisClass){
        	var backClass=" ";
		       switch(thisClass){
			   case "":
			   case "invalid":
			     break;
			   case "reqd":
			    if(allGood&&!validemail(thisTag.value)){
			    	backClass="invalid ";
			    }
		      default:
              backClass+=thisClass;
	    }
	    return backClass;
	   }
	    function validemail(email){
        // var re = /^\w+([\.-]?\w+)*/;//正则表达式
        var re=/^(file|http):\/\/\S+\/\S+\.(gif|png|jpg)$/i;
          if(re.test(email)){
          	document.getElementById("newImg").src=email;
          	return true;
          }
          return false;
	    }

        function labelInvalid(parentNode){
	       if(parentNode.nodeName=="LABEL"){
             parentNode.className+=" invalid";
	       }
        }
   }
}