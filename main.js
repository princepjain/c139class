function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	console.log(hellooooooooooooooooooooooooooooooooooooooohieeeeeeeeeeeeee)
	canvas.parent("canvass")
	instializeInSetup(mario);
}

function draw() {
	game()
}






