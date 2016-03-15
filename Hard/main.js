$(document).ready(function(){
	color();

	setInterval(color, 3000);

	

	function color() {
		var a = []; 
		var b = 0;  
		var g = []; 
		for(var i = 0; i < 6; i += 1) {
			a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
			b = Math.round(Math.random() * 15);
			g.push(a[b]);
		}
			g = g.join("");
			g = "#" + g;
		$('body').css('background-color', g);
		$('.container').text(g);
	}	
})
