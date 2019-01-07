
var gauge;

$(document).ready(function(){
	var opts = {
		angle: -0.2, // The span of the gauge arc
		lineWidth: 0.2, // The line thickness
		radiusScale: 1, // Relative radius
		pointer: {
			length: 0.6, // // Relative to gauge radius
			strokeWidth: 0.035, // The thickness
			color: '#000000' // Fill color
		},

		renderTicks: {
			divisions: 5,
			divWidth: 1.1,
			divLength: 0.7,
			divColor: '#333333',
			subDivisions: 3,
			subLength: 0.5,
			subWidth: 0.6,
			subColor: '#666666'
		},

		staticZones: [
			{strokeStyle: "#f03333", min: 0, max: 6.25}, // Red
			{strokeStyle: "#ff9c04", min: 6.25, max: 12.5}, // orange
			{strokeStyle: "#ffc52b", min: 12.5, max: 18.75}, // yellow
			{strokeStyle: "#56bf36", min: 18.75, max: 25}, // green

		],
	};

	gauge = new Gauge(document.getElementById('gaugeCanvas')).setOptions(opts); // create sexy gauge!
	gauge.maxValue = 25; // set max gauge value
	gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
	gauge.animationSpeed = 100; // set animation speed (32 is default value)
	gauge.set(0); // set actual value
});

var app = new Vue({
	el: '#app',
	data: {
		timer: 0,
		clicksForCalc: 0,
		totalClicks: 0,
		timeSofar:0,
		clickingSpeed: 0,
		bestSpeedSoFar: 0,
	},
	methods: {
		start() {
			this.timeSoFar = 0;
			this.timer = setInterval(
				() => this.calculateSpeed(),
				100
			);
		},

		calculateSpeed() {
			this.timeSoFar += 50;
			this.clickingSpeed = (this.clicksForCalc / (this.timeSoFar / 1000)).toFixed(2);
			//this.gaugeOptions.valuePercent = this.clickingSpeed / 25;
			gauge.set(this.clickingSpeed);
			if (this.timeSoFar >= 1000 && this.clickingSpeed > this.bestSpeedSoFar) {
				this.bestSpeedSoFar = this.clickingSpeed;
			}
		},

		handleClick() {
			if (!this.timer) {
				this.start();
			}

			this.totalClicks++;
			this.clicksForCalc++;
		},

	},
});


let cookie = document.getElementById("cookie");
let counter = document.getElementById("counter");
let points = 0;


let clicker = function(e) {
  e.preventDefault; // default behaviour chanceled

  points = points + 1;

  // set counter
  counter.innerHTML = points;

  if(points === 10) {
    document.getElementById("rewardA").classList.remove("hidden");
  }

  if(points === 20) {
    document.getElementById("rewardA").classList.add("hidden");
  }

  if(points === 20) {
    document.getElementById("rewardB").classList.remove("hidden");
  }

  if(points === 29) {
    document.getElementById("rewardB").classList.add("hidden");
  }

  // remove class
  cookie.classList.remove("bounce");

  // magic...
  void cookie.offsetWidth;

  // add class
  cookie.classList.add("bounce");
}

cookie.addEventListener("click", clicker);
