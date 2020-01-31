/*
$(".wrap").append("가나다라");

$(".wrap").click(function(){
	console.log($(this).css("border"));
});
*/

var wrap = document.querySelector(".wrap");
wrap.innerHTML = "가나다라";
wrap.addEventListener("click", function(){
	this.style.border = "10px solid red";
	this.style.padding = "30px";
	this.style.backgroundColor = "yellow";
});

var str = "2020-01-30 16:40:45";
var str2 = str.substr(0, 10);
console.log(str2);


