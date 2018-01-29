// window.onload=InitPic;

// function InitPic(){
//   for(var i=0;i<document.images.length;i++){
//      document.images[i].ondblclick=newWindow;
//   }
  
// }
// function newWindow(){
// 	var newName="images/"+this.id+".jpg";
// 	window.open(newName,"newImg","width=100px ,height=15px");
//   }
//   
//   
//   
//   
// window.onload=initPic;

// function initPic(){
// 	for(var i=0;i<document.images.length;i++){
// 		document.images[i].ondblclick=newWindow;
// 	}
// }

// function newWindow(){
// 	var newName="images/"+this.id+".jpg";
// 	window.open(newName,"newImg","width=300px,height=350px");
// }
// 
// 
// 
// 
// 
// 
window.onload=initPic;

function initPic(){
	for(var i=0;i<document.images.length;i++){
		document.images[i].ondblclick=newWindow;
	}
}

function newWindow(){
	var newName="images/"+this.id+".jpg"
	window.open(newName,"newImg","width=300px,height=350px;");
}