/********** 배열과 관련된 메소드 **********/
var arr = new Array();

// 데이터 추가
arr.push("A");
arr.push("B");
arr.push("C");
arr.unshift("D");
arr.push("E");
arr.unshift("F");

console.log(arr);

// 데이터 가져오기
console.log(arr[3], arr);
console.log(arr.pop(), arr);
console.log(arr.shift(), arr);

// 로또
var lottoArr = [];
var lotto = [];
for(var i=1; i<=45; i++) {
	lottoArr.push(i);
}

var shuffle = _.shuffle(lottoArr);
for(var i=1; i<=6; i++) {
	lotto.push(shuffle.pop());
}
console.log(_.sortBy(lotto), shuffle);

/*
var temp = _.shuffle(lottoArr);
temp.pop();
temp.pop();
temp.pop();
console.log(lottoArr);
console.log(temp);
*/



var a = 3;
var b = a;
console.log(a, b);
b = 5;
console.log(a, b);


// var temp = _.cloneDeep(lottoArr);
var temp = [];
for(var v of lottoArr) {
	temp.push(v);
}
console.log(temp, lottoArr);
temp.pop();
temp.pop();
temp.pop();
console.log(temp, lottoArr);



/********** Iteration **********/
var arr = ["A", "B", "C", "D"];
var len = arr.length;
for(var i=0; i<len; i++) {
	console.log(arr.shift());
}
console.log(arr);

arr = ["A", "B", "C", "D"];
for(var i in arr) {
	console.log(arr[i]);
}

// 얘는 ES6(explorer-안됨) 쓸수없음 (node, vue, react 사용가능)
for(var v of arr) {
	console.log(v);
}

console.clear();

var users = [
	{id: 1, name: "홍길동", age: 25},
	{id: 2, name: "홍길순", age: 28},
	{id: 3, name: "홍길만", age: 32},
	{id: 4, name: "홍길룡", age: 38},
	{id: 5, name: "홍길영", age: 42}
];

for(var i in users) {
	users[i].age++;
}

var ARRAY = (function(){
	function ARRAY() {

	}
	ARRAY.prototype.booldook = function(){
		
	}
	return ARRAY;
})();

var ARR = new ARRAY();
console.log(ARR);

users.forEach(function(v, i, a){
	console.log(v, i, a);
	v.age++;
});
console.log(users);

Array.prototype.booldook = function(fn){
	
}
var arr = new Array();
console.log(arr);

arr.booldook(function(){

});

Array.prototype.booldook = function(fn) {
	var v = "좋아요";
	fn(v);
}
var arr = new Array();

arr.booldook(function(v){
	console.log("booldook " + v);
});


var a = 1;
var b = [1, 2, 3, "A"];
var c = {
	id: "1",
	name: "홍길동"
};

var d = [
	{id: 1, name: "홍길동"},
	function() {
		console.log("hi~");
	},
	["A", "B", "C"]
];

var e = function() {

}

d[1]();
console.log( d[2][2] );


var f = [[1, 2], [3, 4]];
console.log(f[1][1]);

function fn() {

}

var fn2 = function(){

}

function sum(a, b) {
	return a + b;
}
function sub(a, b) {
	return a - b;
}
function multi(a, b) {
	return a * b;
}
function divide(a, b) {
	return a / b;
}

console.clear();

var n = calc(10, 20, "multi");
console.log(n);

function calc(a, b, type) {
	switch(type) {
		case "sum":
			return a + b;
		case "sub":
			return a - b;
		case "multi":
			return a * b;
		case "divide":
			return a / b;
		default:
			return "연산실패";
	}
}

var Calc = (function(){
	function Calc() {

	}
	Calc.prototype.sum = function(a, b) {
		return a + b;
	}
	Calc.prototype.sub = function(a, b) {
		return a - b;
	}
	Calc.prototype.multi = function(a, b) {
		return a * b;
	}
	Calc.prototype.divide = function(a, b) {
		return a / b;
	}
	return Calc;
})();


var myCalc = new Calc();
console.log(myCalc.sum(10, 20));


// push(), pop(), unshift(), shift(), splice()
var arr = ["A", "B", "C", "D", "E"];
console.log(arr.push("F")); // ["A", "B", "C", "D", "E", "F"]
console.log(arr.unshift("Z")); // ["Z", "A", "B", "C", "D", "E", "F"]

// arr.splice(startIndex, length, [addData]);
var n = arr.splice(3, 1); // n = "C", ["Z", "A", "B", "D", "E", "F"]
console.log(n, arr);
arr.splice(3, 0, "W");
console.log(arr); // ["Z", "A", "B", "W", "D", "E", "F"]

// arr.slice(startIndex, [lastIndex])
var arr = ["A", "B", "C", "D", "E"];
var arr2 = arr.slice(1, 3);
console.log(arr, arr2);
var arr3 = arr.slice(0); // Array DeepCopy(HardCopy)
console.log(arr, arr3);
arr3.push("F");
console.log(arr, arr3);

// arr.concat(array)
var arr = ["A", "B", "C", "D", "E"];
var arr2 = ["F", "G", "H", "I", "J"];
var arr3 = arr.concat(arr2);
console.log(arr3);

// 문자열.split("구분자");
var tel = "010-8332-8040";
var telArr = tel.split("-");
console.log(telArr);

var std = "홍길동,76,33,56 홍길만,67,44,67 홍길순,78,55,78 홍길이,89,66,89 홍길영,89,77,89";
//var stdArr1 = std.split(" ");
var stdArr = [];
std.split(" ").forEach(function(v, i){
	var arr = v.split(",");
	stdArr[i] = {};
	stdArr[i].name = arr[0];
	stdArr[i].kor = arr[1];
	stdArr[i].eng = arr[2];
	stdArr[i].math = arr[3];
});
console.log(stdArr);

var users = [
	{name: "홍길동", age: 25, gender: "M", order: 5},
	{name: "홍길만", age: 34, gender: "M", order: 1},
	{name: "홍길룡", age: 28, gender: "M", order: 12},
	{name: "홍길순", age: 53, gender: "F", order: 102},
	{name: "홍길숙", age: 15, gender: "F", order: 3},
	{name: "홍길이", age: 22, gender: "M", order: 2},
	{name: "홍길삼", age: 35, gender: "M", order: 1},
	{name: "홍길사", age: 45, gender: "M", order: 1},
	{name: "홍길오", age: 35, gender: "M", order: 5},
	{name: "홍길윤", age: 25, gender: "F", order: 13}
];