const sumAll = function(startN, endN) {
    let sum = 0;

    switch(true) {
        case ((typeof startN != 'number' || startN < 0) ||
              (typeof endN != 'number' || endN < 0)):
              return 'ERROR';
        case startN > endN:
            for(let i = endN; i <= startN; i++) {
                sum += i;
            }
         case startN < endN:
                for(let i = startN; i <= endN; i++) {
                    sum += i;
                } 
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
