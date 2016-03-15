$(document).ready(function(){
	setInterval(time, 1000);

	function addZero(x) {
		if(x < 10) {
			x = "0" + x;
		}
		return x;
	}

	function twelveHour(x) {
		if(x > 12) {
			x -= 12;
			x = "0" + x;
		}
		return x;
	}

	function time() {
		var d = new Date ();
		var a = twelveHour(addZero(d.getHours()));
		var b = addZero(d.getMinutes());
		var c = addZero(d.getSeconds());
		var g = a + ':' + b + ':' + c;
		
		$(".container").text(g);
	}	
})
