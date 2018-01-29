// window.onload=initForms;

// function initForms(){
// 	document.getElementsByTagName("form")[0].onsubmit=addNode;
// }
// function addNode(){
// 	var inText=document.getElementById("txtarea").value;
// 	var newTxt=document.createTextNode(inText);
// 	var newGraf=document.createElement("p");
// 	newGraf.appendChild(newTxt);
// 	var docbody=document.getElementsByTagName("body")[0];
// 	docbody.appendChild(newGraf);
// 	return false;
// }


window.onload=initAll;

function initAll(){
	document.getElementsByTagName("form")[0].onsubmit=addNode;
	document.getElementById("deleteP").onclick=deleteNode;
}

function addNode(){
	var inTxt=document.getElementById("txtarea").value;
	var newTxt=document.createTextNode(inTxt);
	var newGraf=document.createElement("p");
	newGraf.appendChild(newTxt);
	var docbody=document.getElementsByTagName("body")[0];
	docbody.appendChild(newGraf);
	return  false;
}


function deleteNode(){
    var allGraf=document.getElementsByTagName("p");
	if(allGraf.length>1){
       var lastGraf=allGraf.item(allGraf.length-1);
       var docbody=document.getElementsByTagName("body")[0];
       docbody.removeChild(lastGraf);
	}
	else{
		alert("no")
	}
	return false;
}
