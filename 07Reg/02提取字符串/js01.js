window.onload=initForms;
function initForms(){
	for(var i=0;i<document.forms.length;i++){
		document.forms[i].onsubmit=validform;
	}
}
function validform(){
	var allTags=document.getElementsByTagName("*");
	for(var i=0;i<allTags.length;i++){
		validTag(allTags[i]);
	}
	return false;

	function validTag(thisTag){
		var allClasses=thisTag.className.split(" ");
		for(var j=0;j<allClasses.length;j++){
			validBaseClass(allClasses[j]);
		}
	
	function validBaseClass(thisClass){
		switch(thisClass){
			case " ":
			break;
			case "nameList":
			thisTag.value=nameList(thisTag.value);
			default:
		}
	}
	function nameList(inNamelist){
		var newNames=new Array;
		var newField="";
		var re=/\s*\n\s*/;
		var newList=inNamelist.split(re);
		re=/(\S+)\s(\S+)/;
		for(var k=0;k<newList.length;k++){
			newNames[k]=newList[k].replace(re,"$2,$1");
		}
		for(var k=0;k<newNames.length;k++){
			newField+=newNames[k]+"\n";
		}
		return newField;
	}
  }
}