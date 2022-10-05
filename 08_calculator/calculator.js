const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(num) {
	return num.reduce((a, b) => a + b, 0);
};

const multiply = function(num) {
  return num.reduce((a,b) => a * b);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
	if(num === 0 || num === 1) {
    return 1;
  }

  for(let i = num -1; i >= 1; i--) {
    num = num * i
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
