window.onload=initAll;//页面加载完成时调用此函数
var usedNums=new Array(76);//设置一个新数组来存使用过的数字
function initAll(){
	if(document.getElementById){//对象探测：目的检查浏览器是否有能力理解使用的对象
	  document.getElementById("reload").onclick=anotherCard;//点击事件触发anotherCard函数
	  newCard();//调用新建标签的函数
	} 
    else{
    	alert("Your browser dosen't support this script");
    }
}
function newCard(){
	  	  for(var i=0;i<24;i++){
		  setSquare(i);//循环操作为每个盒子设置一个数字
	      }
	  }   
function setSquare(thisSquare){
	var currSquare="square"+thisSquare;//每个盒子的ID
    var colPlace=new Array(0,0,0,0,0,1,1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4);//新建一个数组为每列添加一个列名
    var colBasis=colPlace[thisSquare]*15;
    var newNum;
    do{
    	newNum=colBasis+getNewNum()+1;//每列的数字
    }
    while(usedNums[newNum]);
		usedNums[newNum]=true;//为了防止有一样的数字，使用过的数字设置true
		document.getElementById(currSquare).innerHTML=newNum;//赋值
		document.getElementById(currSquare).className="";
		document.getElementById(currSquare).onmousedown=toggleColor;
        // console.log(event);
	}
function getNewNum(){
    return Math.floor(Math.random()*15);//得到随后的数组   Math.floor()向下取整，Math.random()返回0~1之间随机数
}
function anotherCard(){
	for(var i=1;i<usedNums.length;i++){//新建卡片，循环使用的数字
		usedNums[i]=false;//设置为使用过的为false
	}
	newCard();//调用新建卡片
	return false;//不加载href中的链接
}
function toggleColor(evt){//获取点击的对象
	if(evt){
		var thisSquare=evt.target;//主流浏览器获取点击对象的方式
	}
	else{
		var thisSquare=window.event.srcElement;//IE浏览器获取点击的对象的方式
	}
    if(thisSquare.className==""){
    	thisSquare.className="pickedBG";//如果类名为空，设置一个新类名
    }
    else{
    	thisSquare.className="";//否则设置为空
    }
    checkWin();//调用检查是否胜利的函数
}

function checkWin(){//检查获胜状态
    var winningOption=-1;//胜利的标志默认是负值没有获胜
    var setSquares=0;//储存已经单击的盒子
    var winners=new Array(31,992,15360,507904,541729,557328,1083458,2162820,4329736,8519745,8659472,16252928)//获胜的数字
    for(var i=0;i<24;i++){//看盒子是否点击过并且为此盒子赋值
    	var currSquare="square"+i;
    	if(document.getElementById(currSquare).className!=""){
    		document.getElementById(currSquare).className="pickedBG";
    		setSquares=setSquares|Math.pow(2,i);//位运算
    	}
    }
    for(var i=0;i<winners.length;i++){//检验当前盒子的数字是否等于赢得数组中的数字
        if((winners[i]&setSquares)==winners[i]){//获胜状态有12个
        	winningOption=i;//如果胜利，将胜利标志设置为当前i
        }
    }
    if(winningOption>-1){//如果当前数组标志大于-1说明用户为获胜者
       for(var i=0;i<24;i++){
       	if(winners[winningOption]& Math.pow(2,i)){
       	var	currSquare ="square"+i;
       		document.getElementById(currSquare).className="winningBG";
       	}
       }
    }

}