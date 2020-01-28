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


var CarFactory = (function(){
	function CarFactory(model, color, price){
		this.model = model;
		this.color = color;
		this.price = price;
	}
	CarFactory.prototype.start = function() {
		console.log(this.model + "이 시동을 겁니다.");
	}
	CarFactory.prototype.drive = function() {
		console.log(this.model + "이 주행을 합니다..");
	}
	CarFactory.prototype.stop = function() {
		console.log(this.model + "이 멈춥니다.");
	}
	CarFactory.prototype.parking = function() {
		console.log(this.model + "이 주차합니다.");
	}
	return CarFactory;
})();

var car = new CarFactory("avante", "white", 2000);
var car2 = new CarFactory("k5", "black", 2500);

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