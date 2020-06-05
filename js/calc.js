let currentTotal = 0;
let buffer = "0";
let prevCalcAct;

const screen = document.querySelector('.screen');

function ClickButton(value) {
	console.log(value);
}

function initialize() {
	document.querySelector('.calc-buttons')
		.addEventListener('click', function(event) {
			ClickButton(event.target.innerText);
		})
}

initialize();