// window.onfocus=moveBack;
// function moveBack(){
// 	self.blur();//触发这个函数失去焦点
// }
// 
window.onblur=moveUp;
function moveUp(){
	self.focus();//触发这个函数获得焦点
}