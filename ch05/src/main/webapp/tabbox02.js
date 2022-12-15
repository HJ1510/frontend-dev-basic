
/*var liselected = null;
var onTabClicked = function(){
	console.log('clicked-' + this.innerText);
	if(liselected != null){
		liselected.className="";
	}
	this.className = "selected";
	liselected = this;
}*/

 var onTabClicked = function(){
	var divTabBox = document.getElementsByClassName('tab-box')[0];
	var ul = divTabBox.childNodes[1];
	lis = ul.getElementsByClassName('selected');
	
	if(lis.length == 1){
		lis[0].className="";
	}
	
	//(lis.length == 1) && (lis[0].className=""); 
	// 앞이 false면 뒤에 실행x 앞이 true면 뒤에 실행 () 연산자 우선순위때문에 표시 	
	this.className = "selected";
} 
	
	
	
window.addEventListener('load', function(){
	var divTabBox = document.getElementsByClassName('tab-box')[0];
	console.log(divTabBox);
	var ul = divTabBox.childNodes[1];
	console.log(ul);
	var lis = ul.getElementsByTagName('li');
	console.log(lis);
	
	// lis.forEach(function(li){ // lis유사배열
	Array.prototype.forEach.call(lis, function(li){
		li.addEventListener('click', onTabClicked);
	});
});