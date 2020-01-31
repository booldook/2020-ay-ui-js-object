/* 
<div class="lt-box">
	<div class="ball-sm color00">1</div>
	<div class="ball-sm color10">12</div>
	<div class="ball-sm color10">17</div>
	<div class="ball-sm color20">21</div>
	<div class="ball-sm color30">33</div>
	<div class="ball-sm color40">45</div>
</div>

<div class="ball color00">1</div>
<div class="ball color10">12</div>
<div class="ball color10">17</div>
<div class="ball color20">21</div>
<div class="ball color30">33</div>
<div class="ball color40">45</div>
*/

var lottoArr = [];
for(var i=1; i<=45; i++) lottoArr.push(i);

document.querySelector("#btSel").addEventListener("click", onSel);
document.querySelector("#btReset").addEventListener("click", onReset);

function onSel() {
	var lotto = [];
	var lottoShuffle = _.shuffle(lottoArr);
	for(var i=0; i<6; i++) {
		lotto.push(lottoShuffle.pop());
	}
	lotto = _.sortBy(lotto);
	console.log(lotto);
	for(var i in lotto) {

	}
}

function onReset() {
	document.querySelector(".lt-wrap").innerHTML = '';
	document.querySelector(".rt-box").innerHTML = '';
}