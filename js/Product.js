var Product = (function(){
	function Product(data, parent, clsName) {
		this.data = data;
		this.parent = $(parent);
		this.clsName = clsName;
		this.init(this);
	}
	return Product;
})();

Product.prototype.init = function(obj) {
	console.log(this);
	console.log(obj);
	var str = "ABCD";
	console.log(str.substr(0, 1));	// A
	console.log(str.substr(1));			// BCD
	
	var preStr = this.clsName.substr(0, 1);

	var basketCSS = 'width: 30px; height: 30px; line-height: 30px; text-align: center; position: absolute; top: 10px; right: 10px; border: 1px solid #999;border-radius: 50%; color: #333; opacity: 0; transition: all 0.5s;';
	var quickCSS = 'width: 100%; height: 40px; line-height: 40px; text-align: center; position: absolute; left: 0; bottom: 0; background-color: rgba(0, 0, 0, 0.5); color: #fff; opacity: 0; transition: all 0.5s;';


	var html = '';
	if(preStr == "#") html += '<div id="'+this.clsName.substr(1)+'">';
	else html += '<div class="'+this.clsName.substr(1)+'">';
	html += '<div style="position: relative; cursor: pointer;">';
	html += '<img src="'+this.data.src+'" alt=".." style="width: 100%;">';
	html += '<div class="basket" style="'+basketCSS+'">';
	html += '<i class="fa fa-shopping-basket"></i>';
	html += '</div>';
	html += '<div class="quick" style="'+quickCSS+'">QUICKVIEW</div>';
	html += '</div>';
	html += '<div style="padding:0.75rem 0; color:#999;">'+this.data.title+'</div>';
	html += '<div style="color: #333;">'+this.data.price+'</div>';
	html += '</div>';
	this.prd = $(html).appendTo(this.parent);
	this.prd.mouseenter(function(){
		$(this).find(".basket").css({"opacity": 1});
		$(this).find(".quick").css({"opacity": 1});
	});
	this.prd.mouseleave(function(){
		$(this).find(".basket").css({"opacity": 0});
		$(this).find(".quick").css({"opacity": 0});
	});
	this.prd.find(".basket").mouseenter(function(){
		$(this).css({"background-color": "#222", "color": "#fff"});
	});
	this.prd.find(".basket").mouseleave(function(){
		$(this).css({"background-color": "transparent", "color": "#333"});
	});
	this.prd.find(".quick").mouseenter(function(){
		$(this).css({"background-color": "rgba(0, 0, 0, 0.8)"});
	});
	this.prd.find(".quick").mouseleave(function(){
		$(this).css({"background-color": "rgba(0, 0, 0, 0.5)"});
	});
}

/*
<div class="prd">
<div class="img-wrap">
<img src="./img/p1.jpg" alt="상품" class="img">
<div class="basket">
<i class="fa fa-shopping-basket"></i>
</div>
<div class="quick">
QUICKVIEW
</div>
</div>
<div class="title">PRODUCT_01</div>
<div class="price">$18.00</div>
</div>
*/