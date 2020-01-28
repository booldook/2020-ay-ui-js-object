var car = {
	color: "red",
	model: "sonata",
	price: 2500,
	start: function() {
		console.log(this.model + "이 시동을 겁니다.");
	},
	drive: function() {
		console.log(this.model + "이 주행을 합니다..");
	},
	stop: function() {
		console.log(this.model + "이 멈춥니다.");
	},
	parking: function() {
		console.log(this.model + "이 주차합니다.");
	}
}

console.log(car);
car.color = "blue";
console.log(car);
console.log(car.color);
car.start();

console.clear();


var Car = (function(){
	function Car(model, color, price){
		this.model = model;
		this.color = color;
		this.price = price;
	}
	Car.prototype.start = function() {
		console.log(this.model + "이 시동을 겁니다.");
	}
	Car.prototype.drive = function() {
		console.log(this.model + "이 주행을 합니다..");
	}
	Car.prototype.stop = function() {
		console.log(this.model + "이 멈춥니다.");
	}
	Car.prototype.parking = function() {
		console.log(this.model + "이 주차합니다.");
	}
	return Car;
})();

var car = new Car("avante", "white", 2000);
var car2 = new Car("k5", "black", 2500);

car.color = "blue";
console.log(car);
car.start();
console.log(car2);
car2.start();

var Human = (function(){
	function Human(name, gender) {
		this.name = name;
		this.gender = gender;
		this.age = 0;
	}
	Human.prototype.eat = function(food){
		console.log(this.name + "이(가)" + food + "을(를) 먹습니다.");
	}
	return Human;
})();

var man = new Human("아담", "남자");
var woman = new Human("이브", "여자");

woman.eat("선악과");
man.eat("선악과");

// ES5
var SlideES5 = (function(){
	function SlideES5(slide) {
		this.slide = slide;
	}
	SlideES5.prototype.init = function(){
		
	}
	return SlideES5;
})();

// ES6
class SlideES6 {
	constructor(slide) {
		this.slide = slide;
	}
	init() {

	}
}

var slide5 = new SlideES5("es5");
var slide6 = new SlideES6("es6");
console.log(slide5);
console.log(slide6);


// 배열
var arr = [1, 2, 3];
var arr2 = new Array(1, 2, 3);
console.log(arr2);
arr2.push(4);
console.log(arr2);