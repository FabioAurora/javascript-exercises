const ftoc = function(temp) {
  const temperature = (temp - 32) * 5/9;
  const rounded = Math.round(temperature * 10) / 10;
  return rounded;
};

const ctof = function(temp) {
  const temperature = temp * 9/5 + 32;
    const rounded = Math.round(temperature * 10) / 10;
    return rounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
