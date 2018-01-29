window.onload=initForms;

function initForms(){
	document.getElementsByTagName("form")[0].onsubmit=addNode;
	document.getElementById("insert radio").onclick=insertNode;
}
function addNode(){
	var inText=document.getElementById("txtarea").value;
	var newText=document.createTextNode(inText);
	var newNode=document.createElement("p");
	newNode.appendChild(newText);

   nodeChange.appendChild(newNode);
   return false;
}

function insertNode(){
	var inText=document.getElementById("txtarea").value;
	var newText=document.createTextNode(inText);
	var newGraf=document.createElement("p");
	newGraf.appendChild(newText);
	var choiceNode=document.getElementById("selectNum").selectedIndex;
	var allGraf=nodeChange.getElementsByTagName("p");
	var oldGraf=allGraf.item(choiceNode);
	// nodeChange.insertBefore(newGraf,oldGraf);//插入新节点
	nodeChange.replaceChild(newGraf,oldGraf);
}

