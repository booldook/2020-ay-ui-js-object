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

// 문자열.split("구분자") : 문자열을 배열로...
// 배열.join("구분자") : 배열을 구분자로 연결하여 문자열로...
// 배열.toString() : 배열을 ,로 연결하여 문자열로... == 배열.join(',')
var tel = "010-8332-8040";
var telArr = tel.split("-");
console.log(telArr);
var tel2 = telArr.join("-");
console.log(tel2);
var chars = ["A", "B", "C"];
var char = chars.toString();
console.log(char);

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


// filter, map, sort, reverse
var users = [
	{name: "홍길동", age: 25, gender: "M", order: 5, point:5000},
	{name: "홍길만", age: 34, gender: "M", order: 1, point:1000},
	{name: "홍길룡", age: 28, gender: "M", order: 12, point:2200},
	{name: "홍길순", age: 53, gender: "F", order: 102, point:3000},
	{name: "홍길숙", age: 15, gender: "F", order: 3, point:6000},
	{name: "홍길이", age: 22, gender: "M", order: 2, point:3000},
	{name: "홍길삼", age: 35, gender: "M", order: 1, point:7000},
	{name: "홍길사", age: 45, gender: "M", order: 1, point:4500},
	{name: "홍길오", age: 35, gender: "M", order: 5, point:3500},
	{name: "홍길윤", age: 25, gender: "F", order: 13, point:3300}
];

// 회원중 25세 이상인 회원을 찾아내시오.
var user25 = [];
users.forEach(function(v, i) {
	if(v.age >= 25) user25.push(v);
});
console.log(user25);
// console.clear();

// array.filter(fn) - 데이터 필터링
var user30 = users.filter(function(v) {
	return v.age >= 30;
});
console.log(user30);

// array.map(fn) - 데이터 매핑
var user1000 = users.map(function(v) {
	v.point += 1000;
	return v;
});
console.log(user1000);

var userSort = _.sortBy(users, function(v){
	return v.name;
});
console.log(userSort);

var cnt2 = users.sort(function(a, b){
	return a.age - b.age;
});
console.log(cnt2);
console.log(cnt2.reverse()); // arr.reverse() 배열의 순서를 바꿔준다.

// ES6 - entries, keys
for(var [k, v] of Object.entries(users)) {
	for(var [k2, v2] of Object.entries(v)){
		console.log(k2, v2);
	}
}


/* Number Method */
// 값.toString(); 	값을 문자열로...
// 값.parseInt(); 	값을 정수로...
// 값.parseFloat(); 값을 실수로...
// Number(값); 			값을 숫자로...
// 값.toFixed(2); 	값을 소수점 2자리로 표현

/* String Method */
// n = 문자열.indexOf('찾을문자열'); n == -1 (못찾음), n > -1 (찾음)
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("wq");
console.clear();
console.log(pos);

// users 에서 이름에서 '만'을 포함하는 사람을 찾으세요~
var userMan = users.filter(function(v){
	return v.name.indexOf('만') > -1;
});
console.log(userMan);

// str = 문자열.replace("찾을문자열", "바꿀문자열"); str에는 바껴진 문자열 전체가 들어감
var str = "아버지가 방에 들어가신다.";
var str2 = str.replace("아버지", "어머니");
console.log(str2); //어머니가 방에 들어가신다.

// [이쁘다샵] 가디건 (노랑)
var userKang = users.map(function(v) {
	v.name = v.name.replace("홍", "강");
	return v;
});
console.log(userKang);


// 문자열.substr(startIndex, length);
// 문자열.substring(startIndex, endIndex);
var dateTime = "2020-02-03 12:18:22";
var date = dateTime.substr(0, 10);
var date2 = dateTime.substring(0, 10);
console.log(date, date2);
var date3 = dateTime.substr(11, 5);
var date4 = dateTime.substring(11, 16);
console.log(date3, date4);
var date5 = dateTime.substr(11);
var date6 = dateTime.substring(11);
console.log(date5, date6);

// 문자열.toLowerCase(); 모든 문자를 소문자로..
// 문자열.toUpperCase(); 모든 문자를 대문자로..

var productName = "Pretty Yellow Skirt";
var result = productName.toLowerCase().indexOf(("skiRt").toLowerCase());
console.log(result);

// concat(), trim()
var str1 = "  가나다라   " ;
var str2 = " 마바사아  ";
var str = str1.concat(str2);
console.log(str);
console.log(str.trim());


/* Math */
// Math.round(), ceil(), floor(), random(), pow(), abs()
console.clear();
var n = Math.pow(2, 64);
console.log(n);

var arr = [1, 5, 9, 22, 44, -4];
var max = _.max(arr);
var min = _.min(arr);
console.log(max, min);

var temp = arr.sort(function(a, b) {
	return a - b;
});
var max = temp[temp.length-1];
var min = temp[0];
console.log(min, max);


/* Date Methods */
console.clear();

function zp(n) {
	if(n < 10) return "0"+n;
	else return n;
}

var date = new Date();
console.log(date);
// 2020-02-03 13:03:12
var y = date.getFullYear();
var m = zp(date.getMonth() + 1);
var d = zp(date.getDate());
var h = zp(date.getHours());
var i = zp(date.getMinutes());
var s = zp(date.getSeconds());
var yoil = date.getDay();
var ts = date.getTime();

var isoDate = y+"-"+m+"-"+d+" "+h+":"+i+":"+s;
console.log(y, m, d, h, i, s, yoil);
console.log(isoDate);
console.log("Time stamp: "+ ts);

var oldDate = new Date('2019-12-12');
console.log(oldDate);