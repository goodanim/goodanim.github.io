//alert("hi")
				document.onmousemove = function (event) {
				let x = event.x;
				let y = event.y;
				winw = window.innerWidth;
				w = Math.round(winw);
				c = Math.round((x*30)/w-15);
				document.getElementById('one').style.transform='rotateY('+(c/2)+'deg)';
				document.getElementById('two').style.transform='rotateY('+(c/10)+'deg)';
				document.getElementById('three').style.transform='rotateY('+(c/5)+'deg)';
				//document.getElementById('num').textContent=c+" "+w;
			}