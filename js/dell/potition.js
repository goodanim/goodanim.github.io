//alert("hi")
today=new Date()
time = today.getSeconds();
	//alert(time);
document.onmousemove = function (event) {
	let x = event.x;
	let y = event.y;
	a = x/(0.50)/5;
	b = y/(0.50)/5;
	today=new Date()
	time = today.getSeconds();
	//console.log(x+' '+y);
	//document.getElementById('block').style.backgroundColor='red'; //work
	//document.getElementById('stars').style.transform='rotate('+20+x+10+'deg)'; //work
	document.getElementById('stars').style.left=(a-300)+'px';
	document.getElementById('stars').style.top=(b-250)+'px';
}
