/* 
<div class="lt-box">
	<div class="ball-sm color00">1</div>
	<div class="ball-sm color00">7</div>
	<div class="ball-sm color00">8</div>
	<div class="ball-sm color00">11</div>
	<div class="ball-sm color00">12</div>
	<div class="ball-sm color00">41</div>
</div>

<div class="ball color00">1</div>
<div class="ball color10">12</div>
<div class="ball color10">17</div>
<div class="ball color20">21</div>
<div class="ball color30">33</div>
<div class="ball color40">45</div>
*/

var interval;
var lottoArr = [];
for(var i=1; i<=45; i++) lottoArr.push(i);

document.querySelector("#btSel").addEventListener("click", onSel);
document.querySelector("#btReset").addEventListener("click", onReset);

function onSel() {
	document.querySelector("#btSel").disabled = true;
	var lotto = [], lotto2 = [];
	var lottoShuffle = _.shuffle(lottoArr);
	for(var i=0; i<6; i++) {
		lotto.push(lottoShuffle.pop());
	}
	lotto = _.sortBy(lotto);
	lotto2 = _.cloneDeep(lotto);

	document.querySelector(".rt-box").innerHTML = '';
	var html = '', n, c;
	interval = setInterval(makeLotto, 500);
	function makeLotto() {
		if(lotto.length) {
			n = lotto.shift();
			c = Math.ceil(n/10) - 1;
			html = '<div class="ball color'+c+'0">'+n+'</div>';
			document.querySelector(".rt-box").innerHTML += html;
		}
		else {
			clearInterval(interval);
			document.querySelector("#btSel").disabled = false;
			html = '<div class="lt-box">';
			for(var i in lotto2) {
				c = Math.ceil(lotto2[i]/10) - 1;
				html += '<div class="ball-sm color'+c+'0">'+lotto2[i]+'</div>';
			}
			html += '</div>';
			document.querySelector(".lt-wrap").innerHTML += html;
		}
	}
}

function onReset() {
	clearInterval(interval);
	document.querySelector("#btSel").disabled = false;
	document.querySelector(".lt-wrap").innerHTML = '';
	document.querySelector(".rt-box").innerHTML = '';
}

