// if(typeof document.oncontextmenu=="object"){//firefox浏览器不认识document.oncontextmenu
//     if(document.all){//检查是否为IE浏览器的简单方法
//        window.onmousedown=cpatureMousedown;
//     }
//     else{
//     	window.oncontextmenu=cpatureMousedown;//
//     }
// }
// else{
// 	window.oncontextmenu=cpatureMousedown;//firefox浏览器方式
// }


// function cpatureMousedown(evt){
// 	if(evt){
// 		var mouseClick=evt.which;
// 	}
// 	else{
// 		var mouseClick=window.event.button
// 	}
// 	if(mouseClick==1||mouseClick==2||mouseClick==3){
// 		alert("disable menu");
// 		return false;
// 	}
// }
// 
// 
// 1.检查是兼容性，浏览器类型为fixfox、IE、Netscape、Safari
// 2.不同的浏览器使用的对象不同，window.oncontextmenu/window.onmousedown
// 3.safari和Netscape浏览器在处理事件时，会自动创建evt对象、IE不同
// 4.根据用户点击的左/右击判断源代码不能被显示出来
// 5.弹出警示框并return false
// 代码部分
if(typeof document.oncontextmenu=="object"){//不是Firefox;
   if(document.all){//检查IE
   	window.onmousedown=cpatureMousedown;
   }
   else{//Safari、Chrome浏览器
   	window.oncontextmenu=cpatureMousedown;
   }
}
else{//是Firefox
	window.oncontextmenu=cpatureMousedown;
}

function cpatureMousedown(evt){
	if(evt){//除IE
		var mouseClick=evt.which;
	}
	else{
		var mouseClick=window.event.button;
	}

	if(mouseClick==1||mouseClick==2||mouseClick==3){
		alert("disable");
		return false;
	}
}