let arr = document.querySelectorAll('input');
let screen = document.querySelector('.display');
let firstNumber = screen.innerHTML;
let operator = false;
let tempO = false;
let isSet = false;

setListeners();

function setListeners() {
	// loop through all inputs,
	// and assign listeners based on value
	for (let i of arr) {
		// check inputs for operators
		if ((i.value != '=') && (i.value != 'Clear')) {
			if ((isNaN(i.value)) && (i.value != '.')) {
				// if input is an operator,
				i.addEventListener('click', function() {
					// if operator is already assigned,
					// display error,
					// reset operator
					if (operator) {
						screen.innerHTML = 'Error';
						operator = false;
					} else {
						// else assign screen value to firstNumber,
						// assign input to operator
						firstNumber = screen.innerHTML;
						operator = i.value;
						tempO = i.value;
						console.log(operator);
					}
				}, false);
			} else {
				// if input is number or decimal point,
				// add input to screen
				i.addEventListener('click', function() {
					// if tempO is set,
					// reset screen
					// unset tempO
					if (tempO) {
						clear();
						display(i.value);
						tempO = false;
					} else {
						display(i.value);
					}
				}, false);
			}
		} else if (i.value == 'Clear') {
			// if input is 'Clear',
			// clear the screen
			i.addEventListener('click', function() {
				clear();
			}, false);
		} else {
			// if input is '=',
			// calculate the equation
			i.addEventListener('click', function() {
				calculate(firstNumber, screen.innerHTML, operator);
				tempO = true;
				operator = false;

			}, false);
		}
	}
}

function display(btn) {
	// if first character is 0 or Error, 
	// display only the button pressed
	if ((screen.innerHTML == '0') || (screen.innerHTML == 'Error')) {
		screen.innerHTML = btn;
	} else {
		// else add value of button pressed to screen
		screen.innerHTML += btn;
	}
}

function calculate(x, y, z) {
	console.log(x);
	console.log(y);
	console.log(z);
	if ((x.includes('.')) || (y.includes('.'))) {
		x = parseFloat(x);
		y = parseFloat(y);
	} else {
		x = parseInt(x);
		y = parseInt(y);
	}
	if (z == '/') {
		screen.innerHTML = (x / y);
	} else if (z == '-') {
		screen.innerHTML = x - y;
	} else if (z == '+') {
		screen.innerHTML = x + y;
	} else if (z == '*') {
		screen.innerHTML = x * y;
	}
}

function clear() {
	screen.innerHTML = '0';
	tempO = false;
}

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return (a / b) + ( a % b);
}