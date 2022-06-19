window.onload = function() {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth *0.9,
		height = canvas.height = window.innerHeight *0.9,
		handle = {
			x: 0,
			y: 0,
			radius: 30,
			edge: 100,
			height: 100,
			width:100
		},
		offset = {};

	draw();

	function draw() {
		context.clearRect(0, 0, width, height);

		context.fillStyle = "blue";
		context.beginPath();
		// context.arc(handle.x, handle.y,10, 0, Math.PI * 2, false);
		context.rect(handle.x, handle.y,handle.edge,handle.edge)
		context.fill();
	}

	document.body.addEventListener("mousedown", function(event) {
		console.log(utils.pointInRect(event.clientX, event.clientY, handle));
		// if(utils.rectPointCollision(event.clientX, event.clientY, handle)) {
		// 	document.body.addEventListener("mousemove", onMouseMove);
		// 	document.body.addEventListener("mouseup", onMouseUp);
		// 	console.log(handle.x,  handle.y);
		// 	console.log(event.clientX,  event.clientY);
		// 	offset.x = event.clientX - handle.x + handle.edge/12;
		// 	offset.y = event.clientY - handle.y  + handle.edge/12;
		// }
		if(utils.cursorInRect(event.clientX, event.clientY, handle.x, handle.y, handle.width , handle.height)) {
			document.body.addEventListener("mousemove", onMouseMove);
			document.body.addEventListener("mouseup", onMouseUp);
			console.log(handle.x,  handle.y);
			console.log(event.clientX,  event.clientY);
			offset.x = event.clientX - handle.x + handle.edge/12;
			offset.y = event.clientY - handle.y  + handle.edge/12;
		}
	});

	function onMouseMove(event) {
		handle.x = event.clientX - offset.x;
		handle.y = event.clientY - offset.y;
		draw();
	}

	function onMouseUp(event) {
		document.body.removeEventListener("mousemove", onMouseMove);
		document.body.removeEventListener("mouseup", onMouseUp);
	}


};