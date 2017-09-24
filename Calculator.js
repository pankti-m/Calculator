(function() {
var el = function(element) {
	if (element.charAt(0) === "#") {
		return document.querySelector(element);
	} else {
		return document.querySelectorAll(element);
	}
};
var viewer = el("#viewer");
var equals = el("#equals");
var clear = el("#clear");
var nums = el(".num");
var ops = el(".ops");

var currentNum, prevNum, op, result;

var onNumberClick = function() {
	currentNum = this.getAttribute("data-num");
	viewer.innerHTML = currentNum;
};

var onOperatorClick = function() {
	prevNum = currentNum;
	op = this.getAttribute("data-ops");
};

var resetNumbersAndOp = function() {
	currentNum = 0;
	prevNum = 0;
	op = '';
}

var equalsClick = function() {
	switch(op) {
		case "add":
			result = parseInt(prevNum)+parseInt(currentNum);
			break;
		case "subtract":
			result = prevNum-currentNum;
			break;
		case "multiply":
			result = prevNum*currentNum;
			break;
		case "divide":
			result = prevNum/currentNum;
			break;
		default:
			result = 'Invalid entry';
	}
	viewer.innerHTML = result;
	resetNumbersAndOp();		
};

var clearClick = function() {

	resetNumbersAndOp()
	viewer.innerHTML = 0;
};

for (var i=0; i<nums.length; i++) {
	nums[i].onclick = onNumberClick;
}

for (var i=0; i<ops.length; i++) {
	ops[i].onclick = onOperatorClick;
}

equals.onclick = equalsClick;
clear.onclick = clearClick;
}());

