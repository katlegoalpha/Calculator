let currentTotal = 0;
let buffer = "0";
let prevCalcAct = null;

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
	switch(Action) {
		case 'C':
		buffer = '0';
		currentTotal = 0;
		break;
		case '=':
			if(prevCalcAct === null) {
				//no operator chosen
				return;
			}
			flushOpp(parseInt(buffer));
			prevCalcAct = null;
			buffer = currentTotal;
			currentTotal = 0;
			break;
		case '←':
			if (buffer.length === 1) {
				buffer = 0;
			} else {
				buffer = buffer.substring(0, buffer.length - 1);
			}
			break;
		case '+':
		case '-':
		case '*':
		case '/':
			DealMath(Action);
			break;
	}
}

function DealNumber(StringDigit) {
	if( buffer === "0") {
		buffer = StringDigit;
	} else {
		buffer += StringDigit;
	}
}

function DealMath(Action) {
	if(buffer === '0') {
		//nothing happens
		return;
	}
	
	const intBuffer = parseInt(buffer);
	if(currentTotal === 0) {
		currentTotal = intBuffer;
	} else {
		flushOpp(intBuffer);
	}
	prevCalcAct = Action;
	buffer = '0';
}

function flushOpp(intBuffer) {
	if(prevCalcAct === '+') {
		currentTotal += intBuffer;
	} else if(prevCalcAct === '-') {
		currentTotal -= intBuffer;
	} else if(prevCalcAct === '*') {
		currentTotal *= intBuffer;
	}else if(prevCalcAct === '/') {
		currentTotal /= intBuffer;
	}
}

initialize();