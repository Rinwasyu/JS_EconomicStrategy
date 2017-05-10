/*
	Class_name  : Module
	Description : 
*/

class Module extends Basic {
	init() {
		this.insideColor = "gray";
		this.borderColor = "black";
		this.size = 0;
		return this;
	}
	setSize(size) {
		this.size = size;
		return this;
	}
	draw() {
		x.fillStyle = this.insideColor;
		x.strokeStyle = this.borderColor;
		x.lineWidth = this.size * 0.3;
		x.beginPath();
		x.arc(this.x, this.y, this.size, 0, Math.PI * 2);
		x.fill();
		x.stroke();
		return this;
	}
}
