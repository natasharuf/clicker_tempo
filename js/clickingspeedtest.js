function setup() {
createCanvas(400, 400);
}

function draw() {
	background(220);
}


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

			document.getElementById("reward0").classList.add("hidden");

			if(this.clicksForCalc === 1) {
		    document.getElementById("rewardA").classList.remove("hidden");
		  }

		  if(this.clicksForCalc === 20) {
		    document.getElementById("rewardA").classList.add("hidden");
		  }

		  if(this.clicksForCalc === 22) {
		    document.getElementById("rewardB").classList.remove("hidden");
		  }

		  if(this.clicksForCalc === 50) {
		    document.getElementById("rewardB").classList.add("hidden");
		  }

			if(this.clicksForCalc === 51) {
				document.getElementById("rewardC").classList.remove("hidden");
			}

			if(this.clicksForCalc === 100) {
				document.getElementById("rewardC").classList.add("hidden");
			}

			if(this.clicksForCalc === 101) {
				document.getElementById("rewardD").classList.remove("hidden");
			}

			if(this.clicksForCalc === 130) {
				document.getElementById("rewardD").classList.add("hidden");
			}

			if(this.clicksForCalc === 131) {
				document.getElementById("rewardE").classList.remove("hidden");
			}

			if(this.clicksForCalc === 160) {
				document.getElementById("rewardE").classList.add("hidden");
			}

			if(this.clicksForCalc === 161) {
				document.getElementById("rewardF").classList.remove("hidden");
			}

			if(this.clicksForCalc === 190) {
				document.getElementById("rewardF").classList.add("hidden");
			}

			if(this.clicksForCalc === 191) {
				document.getElementById("rewardG").classList.remove("hidden");
			}

			if(this.clicksForCalc === 220) {
				document.getElementById("rewardG").classList.add("hidden");
			}

			if(this.clicksForCalc === 221) {
				document.getElementById("rewardH").classList.remove("hidden");
			}

			if(this.clicksForCalc === 240) {
				document.getElementById("rewardH").classList.add("hidden");
			}

			if(this.clicksForCalc === 241) {
				document.getElementById("rewardI").classList.remove("hidden");
			}

			if(this.clicksForCalc === 260) {
				document.getElementById("rewardI").classList.add("hidden");
			}

			if(this.clicksForCalc === 261) {
				document.getElementById("rewardJ").classList.remove("hidden");
			}

			if(this.clicksForCalc === 290) {
				document.getElementById("rewardJ").classList.add("hidden");
			}

			if(this.clicksForCalc === 291) {
				document.getElementById("rewardK").classList.remove("hidden");
			}

			if(this.clicksForCalc === 320) {
				document.getElementById("rewardK").classList.add("hidden");
			}

			if(this.clicksForCalc === 321) {
				document.getElementById("rewardL").classList.remove("hidden");
			}

			if(this.clicksForCalc === 350) {
				document.getElementById("rewardL").classList.add("hidden");
			}

			if(this.clicksForCalc === 351) {
				document.getElementById("rewardM").classList.remove("hidden");
			}

			if(this.clicksForCalc === 390) {
				document.getElementById("rewardM").classList.add("hidden");
			}

			if(this.clicksForCalc === 391) {
				document.getElementById("rewardN").classList.remove("hidden");
			}

			if(this.clicksForCalc === 420) {
				document.getElementById("rewardN").classList.add("hidden");
			}

			if(this.clicksForCalc === 421) {
				document.getElementById("rewardO").classList.remove("hidden");
			}

			if(this.clicksForCalc === 440) {
				document.getElementById("rewardO").classList.add("hidden");
			}

			if(this.clicksForCalc === 441) {
				document.getElementById("rewardP").classList.remove("hidden");
			}

			if(this.clicksForCalc === 600) {
				document.getElementById("rewardP").classList.add("hidden");
			}

		},

	},
});
