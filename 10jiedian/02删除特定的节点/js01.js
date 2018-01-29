window.onload=initForms;

function initForms(){
	document.getElementsByTagName("form")[0].onsubmit=addNode;
	document.getElementById("delete radio").onclick=deleteNode;
	nodechangediv=document.getElementById("nodechange");
}
function addNode(){
	var inText=document.getElementById("txtarea").value;
 	var newText=document.createTextNode(inText);
    var newNode=document.createElement("p");
    newNode.appendChild(newText);
    nodechangediv.appendChild(newNode);
    return false;
}
function deleteNode(){
	var nodeChioce=document.getElementById("selectNum").selectedIndex;
	var allGraf=nodechange.getElementsByTagName("p");
	var oldGraf=allGraf.item(nodeChioce);
	nodechange.removeChild(oldGraf);
}