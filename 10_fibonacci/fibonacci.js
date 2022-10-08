const fibonacci = function(num) {
    let n1 = 0;
    let n2 = 1;
    let nextTerm;
    for(let i = 1; i < num; i++) {
        nextTerm = n1 +n2;
        n1 = n2;
        n2 = nextTerm;
    }
    if(num < 0) {
        return `OOPS`;
    }
    return n2;
};

// Do not edit below this line
module.exports = fibonacci;
