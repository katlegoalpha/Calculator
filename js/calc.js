let currentTotal = 0;
let buffer = "0";
let prevCalcAct;

const screen = document.querySelector('.screen');

function ClickButton(value) {
	if(isNaN(value)) {
		//not a number, must be an action
		DealCalcAct(value);
	} else {
		//definetly a number
		DealNumber(value);
	}
	screen.innerText = buffer;
}

function initialize() {
	document.querySelector('.calc-buttons')
		.addEventListener('click', function(event) {
			ClickButton(event.target.innerText);
		})
}

function DealCalcAct(Action) {
	if(Action === 'C') {
		buffer = '0';
		currentTotal = 0;
	}
}

function DealNumber(StringDigit) {
	if( buffer === "0") {
		buffer = StringDigit;
	} else {
		buffer += StringDigit;
	}
}

initialize();