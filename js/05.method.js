/* 배열과 관련된 메소드 */
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

