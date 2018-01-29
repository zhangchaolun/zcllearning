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
				case "":
				break;
				case "nameList":
				thisTag.value=nameList(thisTag.value);
				default:
			}
		}
		function nameList(inNameList){
			var newName=new Array;
			var newField="";
			var re=/\s*\n\s*/;
			var nameList=inNameList.split(re);
			re=/^(\S)(\S+)\s(\S)(\S+)$/;
			for(var k=0;k<nameList.length;k++){
				if(nameList[k]){
				re.exec(nameList[k]);
				newName[k]=RegExp.$3.toUpperCase()+RegExp.$4.toLowerCase()+", "+RegExp.$1.toUpperCase()+RegExp.$2.toLowerCase();
				}
			}
			newName.sort();
			for(var k=0;k<newName.length;k++){
				newField+=newName[k]+"\n";
			}
			return newField;
		}
	}
}