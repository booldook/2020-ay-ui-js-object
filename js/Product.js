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
	var quickCSS = 'width: 100%; height: 40px; line-height: 40px; text-align: center; position: absolute; left: 0; bottom: 0; background-color: rgba(0, 0, 0, 0.4); color: #fff; opacity: 0; transition: all 0.5s;';


	var html = '';
	if(preStr == "#") html += '<div id="'+this.clsName.substr(1)+'">';
	else html += '<div class="'+this.clsName.substr(1)+'">';
	html += '<div style="position: relative; cursor: pointer;">';
	html += '<img src="'+this.data.src+'" alt=".." style="width: 100%;">';
	html += '<div style="'+basketCSS+'">';
	html += '<i class="fa fa-shopping-basket"></i>';
	html += '</div>';
	html += '<div style="'+quickCSS+'">QUICKVIEW</div>';
	html += '</div>';
	html += '<div class="title">'+this.data.title+'</div>';
	html += '<div class="price">'+this.data.price+'</div>';
	html += '</div>';
	this.prd = $(html).appendTo(this.parent);
	console.log(this.prd);
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