var Box = (function(){
	function Box(parent, className, color, hoverColor, width, height) {
		this.parent = parent;
		this.className = className;
		this.color = color;
		this.hoverColor = hoverColor;
		this.width = width;
		this.height = height;
		this.init();
	}
	Box.prototype.init = function(){
		var me = this;
		var style = 'width:'+this.width+'px; height:'+this.height+'px; background-color:'+this.color+';';
		var html = '<div class="'+this.className+'" style="'+style+'"></div>';
		// var obj = this.parent.append(html); //parent
		this.obj = $(html).appendTo(this.parent); //children
		this.obj.mouseenter(function(){
			$(this).css({"background-color": me.hoverColor});
		});
		this.obj.mouseleave(function(){
			$(this).css({"background-color": me.color});
		});
	}
	return Box;
})();

// 실행
// var box = new Box($(".wrapper"), "box", "blue", "red", 100, 100);
// var box2 = new Box($(".wrapper"), "box", "orange", "green", 150, 150);




$.ajax({
	url: "../json/products.json",
	type: "get",
	dataType: "json",
	success: function(res) {
		for(var i in res.products) {
			new Product(res.products[i], ".prd-wrap", ".prd");
		}
	},
	error: function(xhr) {
		console.log(xhr);
	}
});
