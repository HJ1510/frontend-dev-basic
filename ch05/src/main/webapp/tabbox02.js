
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
	
	console.log("childNodes[0]" + divTabBox.childNodes[0]);
	console.log("childNodes[1]" + divTabBox.childNodes[1]);
	console.log("childNodes[2]" + divTabBox.childNodes[2]);
	console.log("childNodes[3]" + divTabBox.childNodes[3]);
	console.log("childNodes[4]" + divTabBox.childNodes[4]);
	console.log("childNodes[5]" + divTabBox.childNodes[5]);
	console.log("childNodes[6]" + divTabBox.childNodes[6]);
	
	if(lis.length == 1){
		lis[0].className="";
	}
	
	//(lis.length == 1) && (lis[0].className=""); 
	// 앞이 false면 뒤에 실행x 앞이 true면 뒤에 실행 () 연산자 우선순위때문에 표시 	
	this.className = "selected";
} 
	
	
	
window.addEventListener('load', function(){
	var divTabBox = document.getElementsByClassName('tab-box')[0];
	//console.log(divTabBox);
	var ul = divTabBox.childNodes[1];
	//console.log(ul);
	var lis = ul.getElementsByTagName('li');
	//console.log(lis);
	
	// lis.forEach(function(li){ // lis유사배열
	Array.prototype.forEach.call(lis, function(li){
		li.addEventListener('click', onTabClicked);
	});
});